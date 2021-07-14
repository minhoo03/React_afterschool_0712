
// import './../node_modules/bootstrap/dist/css/bootstrap.css';
import A01FuncProps from './components/A01FuncProps'
import A02FuncEvent from './components/A02FuncEvent'
import A03FuncEvent from './components/A03FuncEvent'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'
import A06Arguments from './components/A06Arguments'
import A07ChildComponent from './components/A07ChildComponent'
import NotFoundComponent from './components/NotFoundComponent'

import { Link, Route, Switch, NavLink } from 'react-router-dom'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  const style = {
    color: 'orange'
  }

  return (
    <div className="card-body">
      <h1>Chap07 Router</h1>

      <div>
        {/* <Link to ="/" render={ () => {
          <div>
            <h3>Index Page</h3>
          </div>
        }} /> */}
        <Link to="/">Index</Link> | &nbsp;
        <Link to="/A01Comp">A01 Comp</Link> | &nbsp;
        <Link to="/A02Comp">A02 Comp</Link> | &nbsp;
        <Link to="/A03Comp">A03 Comp</Link> | &nbsp;
        <Link to="/A04History">A04 History</Link> | &nbsp;
        <Link to="/A05MatchParam/5/data/minu">A05 MatchParam</Link> | &nbsp;
        <NavLink activeStyle={style} to="/A06Arguments?name=Minu&age=19&no=5&address=Seoul#abc">A06 Arguments</NavLink> | &nbsp;
        <NavLink activeStyle={style} to="/A07Child">A07 ChildComponent</NavLink> | &nbsp;
        <NavLink activeStyle={style} to="/nf">NotFound</NavLink> | &nbsp;
      </div>

      <div>
        {/* Switch: 매칭되는 path가 없을시 무조건 렌더링 되던 현상을 없애줌 */}
        <Switch>
          {/* 이 태그 자체가 DOM... 그리고 익명 함수를 통해 DOM을 만들다 */}
          <Route exact path="/" render={() => (<div><h3>Index Page</h3></div>)}></Route>
          <Route path="/A01Comp" render={() => <A01FuncProps name="minu" age={19} user={user} ary={ary} onPlus={onPlus} isChecked>App Content</A01FuncProps>} />
          <Route path="/A02Comp" component={A02FuncEvent} />
          <Route path={["/A03Comp", "/A03Event"]} component={A03FuncEvent} />
          <Route path="/A04History" component={A04History} />
          <Route path="/A05MatchParam/:num/data/:name" component={A05MatchParam} />
          <Route path="/A06Arguments" component={A06Arguments} />
          <Route path="/A07Child" component={A07ChildComponent} />
          {/* ▼ 유저가 요청한 path 매칭되는 Route가 없을시 나타남 */}
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
