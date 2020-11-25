import React from "react";
import './App.css';
import Employees from './Components/Employees/employes';
import Branch from './Components/Branch/branch';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
    <nav className="navbar navbar-expand navbar-app">
        <a href="/branch" className="navbar-brand">
          Cumplo Code Challenge
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/branch"} className="nav-link">
              Branch
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
          <Route exact path={["/", "/branch"]} component={Branch} />
          <Route exact path="/employees" component={Employees} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
