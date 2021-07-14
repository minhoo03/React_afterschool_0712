
import React from 'react'
import './css/todos.css'

function TodoListItem(props) {
    
    const {todo, updateTodo, deleteTodo } = props;

    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={ () => updateTodo(todo.id) }>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => deleteTodo(todo.id) }>Delete</button>
            </td>
        </tr>
    )
}

// React.memo: 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지 (최적화)
export default React.memo(TodoListItem)
