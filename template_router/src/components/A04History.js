
import React from 'react';
import { useHistory } from 'react-router';

const A02ProductComponent = (props) => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goForWard = () => {
        history.goForward()
    }

    const goHome = () => {
        history.push('/')
    }

    const goURL = (url) => {
        history.push(url)
    }

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={goBack}>BACK</button>
                <button onClick={goForWard}>FORWARD</button>
                <button onClick={goHome}>HOME</button>
                <button onClick={ () => goURL('/A02Comp')}>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;