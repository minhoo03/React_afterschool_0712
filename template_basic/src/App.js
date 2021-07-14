// import './../node_modules/bootstrap/dist/css/bootstrap.css'

import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'
import A04Library from './components/A04Library'
import A05CreateDOM from './components/A05CreateDOM'
import A06Hook from './components/A06Hook'
import A07Hook from './components/A07Hook'
import A08HigherOrder from './components/A08HigherOrder'
import A09Currency from './components/A09Currency'
import A10Immer from './components/A10Immer'

function App() {

  return (
    <div className="App">
      
      <A10Immer />
      <A09Currency />
      <A08HigherOrder />
      <A07Hook />
      <A06Hook />
      <A05CreateDOM />
      <A04Library />
      <A03FuncEvent />
      <A02FuncState />
      <A01FuncProps name="김민후" age="19" />
      {/* <A07Hook /> */}
    </div>
  );
}

export default App;

