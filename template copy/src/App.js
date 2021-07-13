// import './../node_modules/bootstrap/dist/css/bootstrap.css'

import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'
import A06Hook from './components/A06Hook'
import A07Hook from './components/A07Hook'
import A08HigherOrder from './components/A08HigherOrder'

function App() {

  return (
    <div className="App">
      {/* <A01FuncProps name="김민후" age="19" /> */}
      <A08HigherOrder />
      <A07Hook />
    </div>
  );
}

export default App;

