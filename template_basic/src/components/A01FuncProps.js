// A01FuncProps.js

import React from 'react'
import PropTypes from 'prop-types'

// props => 상위 컴퍼넌트 등이 전달한 값을 받을 목적으로 정의된 내장 객체. props => {name: 'xxx', age: 30...} 형태
function A01FuncProps(props) {
    // const name = props.name;
    const {name: nickname, age, user, arr, onPlus, isChecked} = props;
    const {children, num} = props;

    return (
        <div>
            <h3>A01 Function props</h3>

            <div>
                <h4>Props: 상위 컴퍼넌트가 전달한 값을 받아 사용 - 수정 불가</h4>
                Name: {nickname} <br />
                Age: {age + 100}<br />
                User: {user.name} / {user.age} / {user.address} <br />
                Array: {arr[0]} / {arr[1]} / {arr[10]} <br />
                onPlus: {onPlus(10, 20)}<br />
                isChecked: boolean 값은 표시되지 않음: {isChecked ? 'TRUE' : 'FALSE'}<br />
                <br />
                {children}<br />
                <br />
                Num: {num}
            </div>

            <div>
                <h4>Props: 상위 컴퍼넌트가 전달한 값을 받아 사용 - 수정 불가</h4>
                Name: {props.name} <br />
                Age: {props.age + 100}<br />
                User: {props.user.name} / {props.user.age} / {props.user.address} <br />
                Array: {props.arr[0]} / {props.arr[1]} / {props.arr[10]} <br />
                onPlus: {onPlus(10, 20)}<br />
                isChecked: boolean 값은 표시되지 않음: {props.isChecked ? 'TRUE' : 'FALSE'}<br />
                <br />
                {props.children}<br />
                <br />
                Num: {props.num}
            </div>
        </div>
    )
}
export default A01FuncProps

// 상위 컴퍼넌트에서 전달하지 않은 속성이 있는 경우.
A01FuncProps.defaultProps = {       
    num: 1000,
}

// 전달되는 값의 타입을 체크할 목적으로 정의.
// 타입 체크는 내장 객체가 아님. import 필요.
A01FuncProps.propTypes = {
    name: PropTypes.string.isRequired,          // 반드시 속성으로 값으 넘어와야 한다.
    age: PropTypes.number,
    user: PropTypes.object,
    arr: PropTypes.array,
    onPlus: PropTypes.func
}