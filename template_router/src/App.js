
// import './../node_modules/bootstrap/dist/css/bootstrap.css';
import A01FuncProps from './components/A01FuncProps'
import A02FuncEvent from './components/A02FuncEvent'
import A03FuncEvent from './components/A03FuncEvent'

import { Link, Route } from 'react-router-dom'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
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
      </div>

      <div>
        {/* 이 태그 자체가 DOM... 그리고 익명 함수를 통해 DOM을 만들다 */}
        <Route exact path="/" render={() => (<div><h3>Index Page</h3></div>)}></Route>
        <Route path="/A01Comp" render={() => <A01FuncProps name="minu" age={19} user={user} ary={ary} onPlus={onPlus} isChecked>App Content</A01FuncProps>} />
        <Route path="/A02Comp" component={A02FuncEvent} />
        <Route path={["/A03Comp", "/A03Event"]} component={A03FuncEvent} />
      </div>

    </div>
  );
}

export default App;
