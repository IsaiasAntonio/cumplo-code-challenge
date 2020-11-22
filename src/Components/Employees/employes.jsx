import React, { useState } from 'react';
import axios from 'axios';

const Employees = () => {
    const [ infoEmployees, setEmployees ] = useState({});
    const [ ifNext, setNext ] = useState(false);
    const [ count, setCount ] = useState(2);

    const getEmployeesData = () => {
        axios.get('https://tryouts-cumplo.herokuapp.com/employees/').then(res => {
            const emp = res.data;
            if(res.data.next !== null) {
                setNext(true);
            } else {
                setNext(false);
            }
            console.log(emp);
            setEmployees(emp);
        })
    }

    const getEmployeesDataNext = () => {
        setCount(count + 1)
        console.log(count);
        axios.get(`https://tryouts-cumplo.herokuapp.com/employees/?page=${count}`).then(res => {
            const emp = res.data;
            if(res.data.next !== null) {
                console.log(res.data.next);
                setNext(true);
            } else {
                setNext(false);
            }
            console.log(emp);
            setEmployees(emp);
        })
    }

    return ( 
        <div>
            <button type="button" className="btn btn-primary" onClick={getEmployeesData}>Get employees</button>
            { ifNext ? 
                <button type="button" className="btn btn-primary" onClick={getEmployeesDataNext}>next</button>
                : ""

            }
        </div>
    );
}

export default Employees;