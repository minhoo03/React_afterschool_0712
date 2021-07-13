
import React from 'react'

const A07Hook = () => {

    

    return (
        <div>
            <h3>A07. useReducer</h3>

            <div>
                Name:
                    <input type="text" name="num" className="form-control" /><br />

                Num: 
                    <input type="text" name="num" className="form-control" /><br />
                Str: 
                    <input type="text" name="str" className="form-control" /><br />

                Today: <br />
                <br />

                Avg: 
                    <div className="input-group">
                        <input type="text" name="str" className="form-control" />
                        <button className="btn btn-outline-primary btn-sm" >ADD</button>
                    </div>
            </div>
        </div>
    )
}

export default A07Hook
