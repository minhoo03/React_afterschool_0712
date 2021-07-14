
import React, { useState } from 'react'

function A03FuncEvent() {

    const [data, setData] = useState({
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'baseball',
        language: new Set(['Angular']),
        isChecked: false,
        baseball: 'NC',
        four: [],
    });

    const changeName = (evt) => setData({...data, name: evt.target.value})
    const changeValue = (evt) => setData({...data, [evt.target.name]: evt.target.value});
    const changeCheckOne = (evt) => setData({...data, isChecked: !data.isChecked})

    const changeCheck = (evt) => {
        if(data.language.has(evt.target.value)) {
            data.language.delete(evt.target.value);
        } else {
            data.language.add(evt.target.value);
        }
        setData({...data, language: new Set([...data.language])})
    }

    const changeSelect = (evt) => {
        const four = evt.currentTarget;
        console.log( [four.selectedOptions] )
        const selected = [...four.selectedOptions].map( (item) => item.value );
        setData({...data, four: selected})
    }
    
    const sendData = (evt) => {
        evt.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <h3>A03 Function Component Event & Form</h3>

            <form>
                Name: {data.name}
                    <input type="text" name="name" className="form-control" defaultValue={data.name} onChange={changeName} />
                Age: {data.age} 
                    <input type="text" name="age" className="form-control" value={data.age} onChange={changeValue} />
                Date: {data.date}
                    <input type="date" name="date" className="form-control" value={data.date} onChange={changeValue} />

                RadioButton: {data.sports}<br />
                    <div className="form-check">
                        <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" 
                            defaultChecked={data.sports === 'baseball'} onChange={changeValue} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                            defaultChecked={data.sports === 'soccer'} onChange={changeValue} />
                        <label htmlFor="soccer" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                            defaultChecked={data.sports === 'basketball'} onChange={changeValue} />
                        <label htmlFor="basketball" className="form-check-label">농구</label>
                    </div>

                CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
                    <div className="form-check">
                        <input type="checkbox" id="check" className="form-check-input" 
                            value={data.isChecked} defaultChecked={data.isChecked} onChange={changeCheckOne} />
                        <label htmlFor="check" className="form-check-label">동의</label>
                    </div>

                CheckBox: { Array.from(data.language) } <br />
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                            defaultChecked={data.language.has('Angular')} onChange={changeCheck} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                            defaultChecked={data.language.has('React')} onClick={changeCheck} />
                        <label htmlFor="react" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" 
                            defaultChecked={data.language.has('Vue')} onChange={changeCheck}/>
                        <label htmlFor="vue" className="form-check-label">농구</label>
                    </div>

                SelectBox: {data.baseball}<br/>
                    <select name="baseball" className="form-control" value={data.baseball} onChange={changeValue} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                
                SelectBox Multi: {Array.from(data.four) }<br />
                    <select name="four" multiple size="3" className="form-control" onClick={changeSelect} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                    <br />

                <button type="submit" onClick={sendData}>SEND</button>
            </form>
        </div>
    )
}

export default A03FuncEvent
