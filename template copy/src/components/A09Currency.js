import React, { useCallback, useState } from 'react'

function A09Currency() {

    const [data, setData] = useState({
        qty: 3,
        cost: 5,
        inCurr: 'USD' // 계산 기준이 되는 환율
    })

    const currencles = ['USD', 'EUR', 'EN']
    const rate = {USD: 1, EUR: 1.35, EN: 6.5}

    const changeNumber = useCallback(
        (e) => setData({...data, [e.target.name]: Number(e.target.value)}), [data]
    )

    const changeString = useCallback(
        (e) => setData({...data, [e.target.name]: e.target.value}), [data]
    )

    const onTotal = () => {
        return currencles.map(item => {
            let total =  data.qty * data.cost * rate[data.inCurr] / rate[item]
            console.log(item + ' 기준으로 ' + total.toFixed(2) + ' ' + item)

            return <span key={item}>{item}: {total.toFixed(2)}, &nbsp;</span>
        })
        
    }

    return (
        <div>
            <h3>A09 Currency</h3>

            Qty: <input type="text" name="qty" className="form-control"
            defaultValue={data.qty} onChange={changeNumber} />
            Cost: <input type="text" name="cost" className="form-control"
            value={data.cost} onChange={changeNumber} />
            Country: 
                <select className="form-control" name="inCurr" onChange={changeString}>
                    {currencles.map(item => <option key={item}>{item}</option>)}
                </select>
            <br/>

            <div>Total: {data.qty + data.cost} </div>
            <div>Total: {onTotal()} </div>
        </div>
    )
}

export default A09Currency;
