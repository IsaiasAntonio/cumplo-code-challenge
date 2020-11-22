import React from "react";
import Employees from './Components/Employees/employes';
import Banks from './Components/Banks/banks';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/banks" className="navbar-brand">
          Cumplo Code Challenge
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/banks"} className="nav-link">
              Banks
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/employees"} className="nav-link">
              Employees
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/banks"]} component={Banks} />
          <Route exact path="/employees" component={Employees} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
