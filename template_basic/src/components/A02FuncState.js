// A02FuncState.js

import React, { useState } from 'react'

function A02FuncState(props) {
    // 내부적으로 사용할 변수를 정의. - 바인딩의 값으로 사용은 가능.
    let title = 'A02 Function State';

    // 내부적으로 사용할 변수를 정의. - 변수의 값이 변경되면 View도 변경되는 변수.
    // 변수명과 변수를 변경할 수 있는 함수를 동시에 작성해 준다.
    const [name, setName] = useState('HungBu');
    const [age, setAge] = useState(20);
    const [user, setUser] = useState({
        'name': 'BangJa',
        age: 18,
    });
    const [ary, setAry] = useState( [10, 20, 30] );

    
    // const n = 'name'
    // console.log(user.n); => user.'name'
    // console.log(user[n]);

    // state 변수가 아니므로 값이 변경되도 화면 갱신은 발생하지 않는다.
    const changeTitle = (evt) => {
        title = 'Change Title';
    };

    // Event는 기본이 함수 형태로 기술. 묵시적으로 첫번째 매개변수에 Event 객체를 전달해 준다.
    const changeName = (evt) => {
        setName('NolBu');
    }
    const changeAge = (evt) => setAge(50);

    // Object 객체. 항상 새로운 객체를 만들어 주어야 한다.
    const addObject = (key, value, evt) => {
        setUser({...user, [key]: value})
    };
    const updateObject = (key, value) => {
        setUser({...user, [key]: value})
    };
    const deleteObject = (key) => {
        // setUser({...user, [key]: ''});
        delete user.address;
        const newObject = {...user};
        setUser(newObject);
    };

    // Array 객체. 항상 새로운 객체를 만들어 주어야 한다.
    const addArray = () => {
        const num = Math.ceil(Math.random() * 100);
        // setAry(ary.push(num));           // Error
        setAry(ary.concat(num));            // num을 추가해서 새로운 배열을 리턴해준다.
    };
    const updateArray = (index, value) => {
        // ary[index] = value;
        const newArray = ary.map( (item, i) => index === i ? value : item );
        setAry(newArray);            // num을 추가해서 새로운 배열을 리턴해준다.
    };
    const deleteArray = (index) => {
        // ary.splice(index, 1);
        const newArray = ary.filter( (item, i) => index !== i  );       // 결과가 true면 추가, false면 제외된다.
        setAry(newArray);            // num을 추가해서 새로운 배열을 리턴해준다.
    };


    return (
        <div>
            <h3>{title}: state 변수: 변경 가능.</h3>

            Name: {name}<br />
            Age: {age + 100}<br />
            User: {user.name} / {user.age} / {user.address}<br />
            Array: {ary[0]} / {ary[1]} / {ary[10]}<br />
            { ary.map( (item, i) => <span key={i}>{item} &nbsp; </span>) } <br />

            <br />
            <button onClick={changeTitle}>Title</button>
            <button onClick={changeName}>Name</button>
            <button onClick={changeAge}>Age</button>

            <button onClick={ (evt) => addObject('address', 'Seoul', evt)}>Add User</button>
            <button onClick={ (evt) => updateObject('address', 'Busan')}>Update User</button>
            <button onClick={ () => deleteObject('address')}>Delete User</button>

            <button onClick={addArray}>Add Array</button>
            <button onClick={ (evt) => updateArray(0, 200)}>Update Array</button>
            <button onClick={ () => deleteArray(1)}>Delete Array</button>

        </div>
    )
}

export default A02FuncState
