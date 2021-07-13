
import React, { useCallback, useState } from 'react'

const A06Hook = () => {

    const [data, setData] = useState({
        num: 0,
        str: ''
    })

    const [name, setName] = useState('')

    // 컴포넌트가 렌더링 되어도 함수를 새로 만들지 않고 값을 저장해두어 최적화 된다.
    // 두 번쨰 인자의 조건이 일어날때만 새로 만듦
    const changeNumber = useCallback(
        (e) => setData({...data, [e.target.name]: Number(e.target.value)}), [data]
    )
    const changeString = useCallback(
        (e) => setData({...data, [e.target.name]: e.target.value}), [data]
    )

    const changeName = useCallback(
        (e) => setName(e.target.value), [] // 변수 참조하지 않을시 최초 한 번만 실행 (재생성 X)
    )

    return (
        <div>
            <h3>A06. useState, useEffect</h3>

            <div>
                Name: {name}
                    <input type="text" name="num" className="form-control"
                    value={name} onChange={changeName} /><br />

                Num: {data.num + 100}
                    <input type="text" name="num" className="form-control"
                    value={data.num} onChange={changeNumber} /><br />
                Str: 
                    <input type="text" name="str" className="form-control"
                    value={data.str} onChange={changeString} /><br />

                Today: <br />
                <br />

                Avg: 
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"/>
                        <button className="btn btn-outline-primary btn-sm">ADD</button>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default A06Hook
