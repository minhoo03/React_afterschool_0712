
import React, { useCallback, useRef, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoTemplate = () => {

    // const sampleTodos = [
    //     { id: 1, text: '첫 번째 할 일', done: true },
    //     { id: 2, text: '두 번째 할 일', done: false },
    //     { id: 3, text: '세 번째 할 일', done: false },
    // ];

    const makeTodo = () => {
        const todos = [];
        for(let i = 1; i <= 12; i ++) {
            todos.push({id: i, text: `${i}번째 할 일`, done: false})
        };
        return todos;
    }

    // let cnt = 4;

    // 증감이 되는 값을 유지하고자 할 경우도 사용. 즉 카운트 변수로도 사용한다.
    const cnt = useRef(4);

    const [todoList, setTodoList] = useState(makeTodo());
    const updateTodo = useCallback( (id) => {
        const todos = todoList.map( item => item.id === id ? {...item, done: !item.done} : item );
        setTodoList(todos);
    }, [todoList]);
    const deleteTodo = useCallback( (id) => {
        const todos = todoList.filter( item => item.id !== id );
        setTodoList(todos);
    }, [todoList]);
    const addTodo = useCallback( (text) => {
        const todo = {id: cnt.current++, text: text, done: false};
        setTodoList(todoList.concat(todo));
    }, [todoList, cnt])
    

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodo={addTodo} />
            <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            
        </div>
    )
}
export default TodoTemplate;