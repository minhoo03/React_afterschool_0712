import React, { useState } from 'react'

export default function A02FuncComp() {

    const [comName, setComName] = useState('A02 Function Comp')

    const ChangeName = () => {
        setComName('A02 Function Comp Changed')
    }

    const ReturnName = () => {
        setComName('A02 Function Comp')
    }

    return (
        <div>
            <h3>{comName}</h3>
            <div>This is Function Component</div>

            <button onClick={ChangeName}>Change</button>
            <button onClick={ReturnName}>Return</button>
        </div>
    )
}
