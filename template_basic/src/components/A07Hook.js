
import React, { useEffect, useMemo, useReducer } from 'react'

// reducer와 {} 연결 -> state에 모든 값, action은 업데이트를 위한 정보
function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case 'CHANGE_STRING':
            return {...state, [action.data.name]: action.data.value}
        case 'CHANGE_NUMBER':
            // 넘겨받은 DOM을 로직처리
            let value = Number(action.data.value)
            if(isNaN(value)) value = 0
            return {...state, [action.data.name]: value}
        case 'ADD_LIST' :
            return {...state, list: state.list.concat(action.data)}
        case 'DEFAULT_ZERO' :
            return {...state, avg: ''}
        case 'CHANGE_TODAY' :
            return {...state, today: action.data}
        default: return state
    }
}

const A07Hook = () => {

    // reducer 함수 선언하고 기본 initial 전달 -> state로 받고 action 값을 이용해 return
    // dispatch는 action 값을...
    const [data, dispatch] = useReducer(reducer, {
        name: 'Minu',
        num: 0,
        str: '',
        today: new Date(),
        list: [],
        avg: ''
    })

    // DOM을 넘김
    const changeString = (e) => dispatch({type: 'CHANGE_STRING', data: e.target})
    const changeNumber = (e) => dispatch({type: 'CHANGE_NUMBER', data: e.target})
    const addList = (e) => {
        dispatch({type: 'ADD_LIST', data: data.avg})
        dispatch({type: 'DEFAULT_ZERO'})
    }

    useEffect(() => {
        setInterval(() => {
            dispatch({type: 'CHANGE_TODAY', data: new Date()})
        }, 1000)
    }, [])

    const getAvg = (list) => {
        console.log('getAvg...')
        if(list.length === 0) return 0
        const total = list.reduce( (x,y) => x + y )
        return total / list.length
    }

    const memoAvg = useMemo(() => {
        return getAvg(data.list)
    }, [data.list])

    return (
        <div>
            <h3>A07. useReducer</h3>

            <div>
                Name: {data.name} / {memoAvg}
                    <input type="text" name="name" className="form-control"
                    value={data.name} onChange={changeString} /><br />

                Num: {data.num}
                    <input type="text" name="num" className="form-control"
                    value={data.num} onChange={changeNumber} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                    value={data.str} onChange={changeString} /><br />

                Today: {data.today.toLocaleString()} <br />
                <br />

                Avg: {memoAvg}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control"
                        value={data.avg} onChange={changeNumber} />
                        <button className="btn btn-outline-primary btn-sm" onClick={addList} >ADD</button>
                    </div>

                    {data.list.map((item, index) => <span key={index}>{item} &nbsp;</span>)}
            </div>
        </div>
    )
}

export default A07Hook
