
import React, { useState } from 'react'
import PropTypes from 'prop-types';

function A01FuntionProps(props) {

    const {name: nickname, age: old, user, ary: arr, onPlus, isChecked, children} = props;


    const [name] = useState('NolBu');
    const [age] = useState(100);
    const [ary] = useState([10, 20, 30]);
    const [obj] = useState({
        tel: '010-1234-5678',
        address: 'Busan'
    })

    return (
        <div>
            <h3>A01 Function Component Props</h3>

            <div className="card-body">
                <h4>Props Value</h4>
                
                Name: {props.name}<br />
                Age: {props.age}<br />
                User: {props.user.name} / {props.user.age}<br />
                Ary: {props.ary[0]} / {props.ary[1]} / {props.ary[2]} / {props.ary[3]}<br />
                onPlus: {props.onPlus(10, 20)}<br />
                isChecked: {props.isChecked ? 'checked' : 'unChecked'} <br />
                Num: {props.num}<br />
                <br />
                {props.children}
            </div>

            <div className="card-body">
                <h4>Props Value</h4>
                
                Name: {nickname}<br />
                Age: {old + 100}<br />
                User: {user.name} / {user.age}<br />
                Ary: {arr[0]} / {arr[1]} / {arr[2]} / {arr[3]}<br />
                onPlus: {onPlus(10, 20)}<br />
                isChecked: {isChecked ? 'checked' : 'unChecked'} <br />
                Num: {props.num}<br />
                <br />
                {children}
            </div>

            <div className="card-body">
                <h4>State</h4>
                Name: {name} <br />
                Age: {age}<br />
                Ary: {ary[0]} / {ary[1]} / {ary[2]} / {ary[3]}<br />
                Obj: {obj.tel} / {obj.address}
            </div>
        </div>
    )
}

export default A01FuntionProps


A01FuntionProps.defaultProps = {
    num: 1000
}

A01FuntionProps.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    user: PropTypes.object,
    ary: PropTypes.array,

}
