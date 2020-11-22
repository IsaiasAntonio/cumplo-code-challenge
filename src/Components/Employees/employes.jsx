import React, { useState } from 'react';
import axios from 'axios';

const Employees = () => {
    const [ infoEmployees, setEmployees ] = useState({});

    const getEmployeesData = () => {
        axios.get('https://tryouts-cumplo.herokuapp.com/employees/').then(res => {
            const emp = res.data.results;
            console.log(emp);
            setEmployees(emp);
        })
    }

    return ( 
        <div>
            <button type="button" className="btn btn-primary" onClick={getEmployeesData}>Get employees</button>
        </div>
    );
}

export default Employees;