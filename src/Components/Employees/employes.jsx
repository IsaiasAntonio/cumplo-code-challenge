import React, { useState } from 'react';
import { createEmployee } from '../../utils/methods';
import './index.scss';

const Employees = () => {
    const branchValues = [
        {
            "id": 1,
            "name": "Quinn Wiley",
            "bank": 4
        },
        {
            "id": 2,
            "name": "Josiah Montgomery",
            "bank": 2
        },
        {
            "id": 3,
            "name": "Hedley Todd",
            "bank": 2
        },
        {
            "id": 4,
            "name": "Victor Boone",
            "bank": 4
        }
    ];

    const [ submit, setSubmit ] = useState(false);
    const [ empty, setEmpty ] = useState(false);

    const [ formValues, setFormValues ] = useState({
        name: "",
        middle_name: "",
        last_name: "",
        branch: 0
    });

    const onFormChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const sendData = (evt) => {
        evt.preventDefault();
        setSubmit(false);
        setEmpty(false);
        const { name, middle_name, last_name, branch } = formValues;
        let valueObj = {
            "name": name,
            "middle_name": middle_name,
            "last_name": last_name,
            "branch": branch
        };

        if( !name || !middle_name || !last_name || !branch ) {
            console.log("All fields must be filled");
            setEmpty(true);
        } else {
            createEmployee(valueObj).then(res => {
                console.log(res);
                setFormValues({
                    ...formValues,
                    [evt.target.name]: "",
                })
                setEmpty(false);
                setSubmit(true);
            }).catch(e => {
                console.log(e);
            })
        }
    }

    return ( 
        <div className="container employees-form">
            <form className="form-container" onChange={onFormChange} onSubmit={(event) => sendData(event)} >
                <div className="form-group">
                    <label>First Name</label>
                    <input name="name" className="form-control" type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label>Middle Name</label>
                    <input name="middle_name" className="form-control" type="text" placeholder="Middle input" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name="last_name" className="form-control" type="text" placeholder="Last input" />
                </div>
                <div className="form-group">
                    <label>Branch</label>
                    <select name="branch" className="form-control">
                        <option value="0" disabled>Select a Branch</option>
                        {
                            branchValues.map((values) => {
                                return (
                                    <option key={values.id} value={values.id}>{values.name}</option>
                                )
                            
                            })
                        }
                    </select>
                </div>
                { submit ?  <div className="alert alert-success" role="alert">Employee Created!</div> : '' }
                { empty ?  <div className="alert alert-danger" role="alert">All fields must be filled</div> : '' }
                <div className="button-submit">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        
        </div>
    );
}

export default Employees;