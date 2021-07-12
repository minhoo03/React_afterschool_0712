import React from 'react'

function A01FuncProps(props) {

    const { name, age } = props

    return (
        <div>
            <h3>A01 Function props</h3>

            <div>
                <h4>Props: 상위 컴포넌트가 전달한 값을 받아 사용 - 수정 불가</h4>
                <p>Name: {name}</p>
                <p>Age: {age}+</p>
            </div>
        </div>
    )
}

export default A01FuncProps
