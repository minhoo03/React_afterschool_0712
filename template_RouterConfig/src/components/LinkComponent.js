import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function LinkComponent() {

    const style = {
        color: 'orange'
    }

    return (
        <div>
            <Link exact="true" to="/">Index</Link> | &nbsp;
            <Link to="/A01Comp">A01 Comp</Link> | &nbsp;
            <Link to="/A02Comp">A02 Comp</Link> | &nbsp;
            <Link to="/A03Comp">A03 Comp</Link> | &nbsp;
            <NavLink activeStyle={style} to="/A04History">A04 History</NavLink> | &nbsp;
            <NavLink activeStyle={style} to="/A05MatchParam/5/data/minu">A05 MatchParam</NavLink> | &nbsp;
            <NavLink activeStyle={style} to="/A06Arguments?name=Minu&age=19&no=5&address=Seoul#abc">A06 Arguments</NavLink> | &nbsp;
            <NavLink activeStyle={style} to="/A07Child">A07 ChildComponent</NavLink> | &nbsp;
            <NavLink activeStyle={style} to="/nf">NotFound</NavLink> | &nbsp;
        </div>
    )
}

export default LinkComponent
