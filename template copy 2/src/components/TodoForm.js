
import React, { useCallback, useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    
    const {addTodo} = props;
    const [text, setText] = useState('');
    const textRef = useRef();

    const changeText = useCallback( (evt) => setText(evt.target.value), []);
    const sendData = useCallback( (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText('');
        textRef.current.focus();
    }, [addTodo, text]);

    useEffect( () => {
        textRef.current.style.border = '1px solid orange';
        textRef.current.focus();
    }, [])

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" value={text} onChange={changeText} ref={textRef} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm