
import React, { useState } from 'react'

function A05CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    const [baseObject, setBaseObject] = useState([
        {id: 1, team: 'NC', value: 'NC'},
        {id: 2, team: '두산', value: 'Doosan'},
        {id: 3, team: '엘지', value: 'LG'},
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        isChecked: false,
    });

    const makeDOM = () => baseObject.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.team}</td>
            <td>{item.value}</td>
        </tr>
    ))

    const changeValue = (evt) => setData({...data, [evt.target.name]: evt.target.value});
    const addTeam = () => setBaseObject(baseObject.concat({id: 4, team: '삼성', value:"Samsung"}))
    const showHide = () => setData({...data, isChecked: !data.isChecked})

    const test = data.teamOne || 10 // 10
    const test1 = data.teamOne && 10 // 

    return (
        <div>
            <h3>A05 Make DOM</h3>
            
            SelectBox: {data.teamOne}<br/>
            <select name="teamOne" className="form-control" onChange={changeValue}>
                <option>선택해주세요</option>
                {baseArray.map((item, index) => <option key={index}>{item}</option>)}
                {/* React는 메모리에서 바뀐 점을 찾기에 고유값이 있어야 식별 가능 */}
            </select>

            SelectBox: {data.teamTwo}<br/>
            <select name="teamTwo" className="form-control" onChange={changeValue}>
                <option value="">선택해주세요</option>
                {baseObject.map(item => <option key={item.id} value={item.option}>{item.team}</option>)}
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {makeDOM}
                </tbody>
            </table>

            { data.isChecked &&
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm">ADD</button>
                </div>
            }
            <br />
            
            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A05CreateDOM
