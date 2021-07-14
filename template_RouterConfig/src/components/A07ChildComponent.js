
import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const A05ChildComponent = (props) => {
    console.log('props', props.route.routes) // 볼 수 없던 routes 속성이 추가되어있다.
    return (
        <div>
            <h5>Children Component</h5>
            <div>This is Children Component</div>
            <br />
            
            <div>
                <Link to="/A07Child">ONE</Link> | &nbsp; 
                <Link to="/A07Child/two/100"> TWO</Link> |  &nbsp;
                <Link to="/A07Child/three"> THREE</Link>
            </div>
            
            <hr />

            {renderRoutes(props.route.routes)}
        </div>
    )
}
export default A05ChildComponent;