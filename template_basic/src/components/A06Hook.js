
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// useCallback : 함수 반환 - 최적화(조건에만 발동)
// useMemo : 값 반환 - 최적화(조건에만 발동)

// *useCallback => Event Handler의 재 생성 시점이라면, useMemo는 일반 함수의 실행 시점을 결정.

const A06Hook = () => {

    const [data, setData] = useState({
        num: 0,
        str: ''
    })

    const [name, setName] = useState('')
    const [today, setToday] = useState(new Date())
    const [list, setList] = useState([])
    const [avg, setAvg] = useState(0)

    const nameRef = useRef()

    // DOM이 완성된 후
    useEffect(() => {
        nameRef.current.style.border = '1px solid orange'
    }, [])

    useEffect(() => {
        setInterval(() => {
            setToday(new Date())
        }, 1000);
    }, [])

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

    const changeAvg = useCallback(
        (e) => {
            let value = Number(e.target.value)
            // 숫자 이외의 값이 입력될시
            if(isNaN(value)) value = 0
            setAvg(value)
        }, []
    )

    const addList = useCallback(() => {
        setList(list.concat(avg)) // setList(avg)는 값을 바꿔버림 => 그냥 error
        setAvg(0)
        
    }, [list, avg]) // list, avg가 변경되면

    const getAvg = (list) => {
        console.log('get Avg...')
        if(list.length === 0) return 0
        const total = list.reduce( (x,y) => x + y )
        return total / list.length
    }

    // 지정해준 조건이 변경될때만 실행하고 그 이후엔 실행하지 않음
    const memoAvg = useMemo(() => {
        return getAvg(list)
    }, [list])

    return (
        <div>
            <h3>A06. useState, useEffect, useMemo, useCallback</h3>

            <div>
                Name: {name}
                    <input type="text" name="num" className="form-control"
                    value={name} onChange={changeName} ref={nameRef} /><br />

                Num: {data.num}
                    <input type="text" name="num" className="form-control"
                    value={data.num} onChange={changeNumber} /><br />
                Str: 
                    <input type="text" name="str" className="form-control"
                    value={data.str} onChange={changeString} /><br />

                Today: {today.toLocaleString()} <br />
                <br />

                Avg: {avg} / {memoAvg}
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"
                        value={avg} onChange={changeAvg}
                        />
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
                {list.map( (item, index) => <span key={index}>{item} &nbsp;</span>)}
            </div>
        </div>
    )
}

export default A06Hook
