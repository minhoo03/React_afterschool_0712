
import React, { useState } from 'react'

function A02FuncEvent() {

    const [name, setName] = useState('NolBu');
    const [age, setAge] = useState(30);
    const [ary, setAry] = useState([10, 20, 30]);
    const [obj, setObj] = useState({
        tel: '010-1234-5678',
        address: 'Seoul'
    });

    const changeName = () => setName('HungBu');
    const changeAge = (value) => setAge(value);

    const addAry = (value) => setAry(ary.concat(value));
    const changeAry = (index, value) => setAry( ary.map( (item, i) => i === index ? value : item) );
    const removeAry = (index) => setAry( ary.filter((item, i) => i !== index) )

    const addObject = (value) => setObj({...obj, ...value});
    const changeObject = (value) => setObj({...obj, ...value});
    const deleteObject = (value) => setObj({...obj, [value]: ''})

    return (
        <div>
            <h3>A02 Function Component Event</h3>

            <div className="card-body">
                <h4>State</h4>
                Name: {name} <br />
                Age: {age}<br />
                Ary: {ary[0]} / {ary[1]} / {ary[2]} / {ary[3]} / {ary[4]}<br />
                
                {ary.map( (item, i) => {
                    if(i !== ary.length - 1) {
                        return <span key={i}>{item}, </span>
                    }else{
                        return <span key={i}>{item}</span>
                    }
                })} <br />
                
                Obj: {obj.tel} / {obj.address} / {obj.age}
            </div>

            <div className="card-body">
                <button onClick={changeName}>Name</button>
                <button onClick={ () => changeAge(2000) }>Age</button>

                <button onClick={ () => addAry( Math.ceil(Math.random() * 100)) }>Add Ary</button>
                <button onClick={ () => changeAry(0, 200) }>Change Ary</button>
                <button onClick={ () => removeAry(0) }>Remove Ary</button>

                <button onClick={ () => addObject( {age: 20} ) }>Add Object</button>   {/* boolean 값 대입은 표시되지 않음 */}
                <button onClick={ () => changeObject( {age: 100} ) }>Change Object</button>   {/* boolean 값 대입은 표시되지 않음 */}
                <button onClick={ () => deleteObject('age') }>Change Object</button>   {/* boolean 값 대입은 표시되지 않음 */}
            </div>
            </div>
    )
}

export default A02FuncEvent
