import logo from './logo.svg';
import './App.css';

import A01ClassComp from './components/A01ClassComp'
import A02FuncComp from './components/A02FuncComp'
import A04Library from './components/A04Library'

function App() {

  let name = '김민후'
  let age = 19
  let onAdd = (x, y) => {
    return x+y
  }

  return (
    <div className="App">
      <h3>name: {name}</h3>
      <h4>age: {age}</h4>
      <h5>x + y: {onAdd(1, 2)}</h5>

      <A01ClassComp />
      <A02FuncComp />
      <A04Library />
    </div>
  );
}

export default App;
