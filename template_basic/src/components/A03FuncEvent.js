
import React, { useEffect, useRef, useState } from 'react'

function A03FuncEvent() {

    const [name, setName] = useState('NulBu');
    const [data, setData] = useState({
        age: 20,
        date: '2021-07-13',
        sports: 'baseball',
        isChecked: false,
        language: new Set(['Angular']),
        baseball: 'NC',
        four: []
    })

    // useRef() Hook
    const nameRef = useRef()
    const ageRef = useRef()

    useEffect(() => {
        console.log(nameRef)
        nameRef.current.style.border = '1px solid orange'
        nameRef.current.focus()

        ageRef.current.color = 'orange'
    }, [])

    // Event
    // const changeName = (evt) => {
    //     // console.log(evt)
    //     // console.log(evt.target)
    //     console.log(evt.target.value, evt.target.type, evt.target.name)
    //     // setName('HungBu');
    //     setName(evt.target.value);
    // }

    const changeValue = (e) => {
        // 모든 state를 가져온 후 event가 일어난 state만 변경
        setData({...data, [e.target.name]: e.target.value})
    }

    const changeChecked = () => {
        setData({...data, isChecked: !data.isChecked})
    }

    // for문 대신 Set
    const changeLanguage = (e) => {
        // state에 e.target.value가 존재하는가?
        if(data.language.has(e.target.value)) {
            data.language.delete(e.target.value)
        } else {
            data.language.add(e.target.value)
        }

        setData({...data, language: new Set ([...data.language])})
    }

    const changeSelected = (e) => {
        const elem = e.target
        console.log([...elem.selectedOptions])
        // 배열로 만든 후 map
        const selectedValue = [...elem.selectedOptions].map(item => item.value)
        setData({...data, four:selectedValue})
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <h3>A03 Function Component Event & Form</h3>

            <form>
                Name: {data.name}
                    <input type="text" name="name" className="form-control" 
                        defaultValue={name} onChange={changeValue} ref={nameRef} /> <br />
                Age: {data.age}
                    <input type="text" name="age" className="form-control"
                    value={data.age} onChange={changeValue} ref={ageRef} /> <br />
                Date: {data.date}
                    <input type="date" name="date" className="form-control" 
                    value={data.date} onChange={changeValue} /> <br />

                RadioButton: <br />
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

                CheckBox One: {data.isChecked ? '동의' : '동의안함'} <br />
                    <div className="form-check">
                        <input type="checkbox" id="check" className="form-check-input"
                        defaultChecked={data.isChecked} onChange={changeChecked} />
                        <label htmlFor="check" className="form-check-label">동의</label>
                    </div>

                CheckBox: {data.language} <br />
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                        defaultChecked={data.language.has('Angular')} onChange={changeLanguage} />
                        <label htmlFor="baseball" className="form-check-label">Angular</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                        defaultChecked={data.language.has('React')} onChange={changeLanguage} />
                        <label htmlFor="react" className="form-check-label">React</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" 
                        defaultChecked={data.language.has('Vue')} onChange={changeLanguage} />
                        <label htmlFor="vue" className="form-check-label">Vue</label>
                    </div>

                SelectBox: {data.baseball} <br/>
                    <select name="baseball" className="form-control" value={data.baseball} onChange={changeValue} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                
                SelectBox Multi: <br />
                    <select name="four" multiple size="3" className="form-control" onChange={changeSelected} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                    <br />

                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default A03FuncEvent
