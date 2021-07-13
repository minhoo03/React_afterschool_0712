
import React from 'react'
import A08WithComp from './A08WithComp'

function A08HigherOrder({ age, clickEvent }) {
    return (
        <div>
            <h3>A08 Higher Order Component</h3>
            <div>
                age: {age}
                <button onClick={clickEvent}>CLick</button>
            </div>
        </div>
    )
}

// A08WithComp를 먼저 실행 후 -> params로 보낸 A08HigherOrder 실행 -> props로 받은 age 표시
export default A08WithComp(A08HigherOrder)
