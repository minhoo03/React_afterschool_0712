import React, { useState } from 'react'

function A02FuncState() {

    const [title, setTitle] = useState('State!')

    const onChangedName = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <h3>A02 State 상태 관리</h3>
            <input onChange={onChangedName} value={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default A02FuncState
