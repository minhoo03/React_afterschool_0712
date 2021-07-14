
import React, { useCallback, useReducer, useRef, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import immer from 'immer'

// 항상 메모리에 떠있고, 원래 Tmp처럼 변수를 하나 하나 찾지 않기에 속도가 매우 빠름 (최적화)
function todoReducer(state, action) {
    console.log(state, action)
    switch(action.type) {
        case 'UPDATE_TODO':
            // 받은 데이터와 배열의 id가 같으면 {넘어온 데이터로 저장} : {아무 일 없음}
            // return {...state, todoList: state.todoList.map(todo => todo.id === action.data ? {...todo, done: todo.done} : todo)}
            return immer(state, draft => {
                let index = draft.todoList.findIndex( todo => todo.id === action.data)
                // todoList의 id값이 다른 것 찾기
                draft.todoList[index].done = !draft.todoList[index].done
            })
        case 'DELETE_TODO':
            // 배열의 id와 action의 data가 같지 않은 것만
            // return {...state, todoList: state.todoList.filter(todo => todo.id !== action.data)}
            return immer(state, draft => {
                let index = draft.todoList.findIndex( todo => todo.id === action.data)
                draft.todoList.splice(index, 1)
            })
        case 'ADD_TODO':
            // 받은 data를 배열에 concat
            // return {...state, todoList: state.todoList.concat(action.data)}
            return immer(state, draft => {
                // push: 기존 배열에 추가
                // concat: 기존 배열 복사 후 원소 추가 후 새 배열 리턴 (2개 배열 합칠 때 자주 사용)
                draft.todoList.push(action.data)
            })
        default:
            return state
    }    
}

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i < 11; i ++) {
        todos.push({id: i, text: `${i}번째 할 일`, done: false})
    };
    return todos;
}

const TodoTmpReduce = () => {

    const [data, dispatch] = useReducer(todoReducer, {
        // state에 전달할 기본 값
        todoList: makeTodo(),
        title: 'TodoList Template Reducer'
    })

    // console.log(data, dispatch)

    // 증감이 되는 값을 유지하고자 할 경우도 사용. 즉 카운트 변수로도 사용한다.
    const cnt = useRef(11);

    
    const updateTodo = useCallback( (id) => {
        dispatch({type: 'UPDATE_TODO', data: id})
    }, []);
    const deleteTodo = useCallback( (id) => {
        dispatch({type: 'DELETE_TODO', data: id})
    }, []);
    const addTodo = useCallback( (text) => {
        const todo = {id: cnt.current++, text, done: false}
        dispatch({type: 'ADD_TODO', data: todo})
    }, [])
    

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodo={addTodo} />
            <TodoList todoList={data.todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            
        </div>
    )
}
export default TodoTmpReduce;