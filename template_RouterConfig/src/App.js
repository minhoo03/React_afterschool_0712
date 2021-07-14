
// import './../node_modules/bootstrap/dist/css/bootstrap.css';


import { Link, Route, Switch, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
import LinkComponent from './components/LinkComponent';

function App() {

  return (
    <div className="card-body">
      <h1>Chap08 RouterConfig</h1>

      <div>
        <LinkComponent />
      </div>
      <br />

      <div>
        {renderRoutes(routes)}
      </div>
    
    </div>
  );
}

export default App;
