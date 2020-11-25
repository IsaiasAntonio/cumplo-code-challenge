import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import './index.scss';

const ModalContainer = (props) => {
    const { employeeInfo } = props;
    const [ employeesData, setEmployeesData ] = useState(employeeInfo || {});
    const [ next, setNextPage ] = useState("");
    const [ back, setBackPage ] = useState("");
    const [ showButton, setButton ] = useState(false);



    useEffect(() => {
        setNextPage(props.employeeInfo.next)
        setEmployeesData(props.employeeInfo)
    }, [props.employeeInfo]);


    const nextPage = () => {
        axios.get(next).then(res => {
        setEmployeesData(res.data);
        if(res.data.next !== null) {
            setNextPage(res.data.next);
            setBackPage(res.data.previous);
            setButton(true);
        } else if(res.data.previous !== null) {
            setButton(true);
        }
        }).catch(e => {
            console.log(e);
        })
    }

    const backPage = () => {
        axios.get(back).then(res => {
            if(res.data.previous !== null) {
                setEmployeesData(res.data);
                setBackPage(res.data.previous);
                setButton(true);
            } else {
                setButton(false);
            }
            
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="modal-cont">
            <div className="container">
                <div>
                    <table className="table table-dark">
                        <thead>
                            <tr className="table-col">
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Branch</th>
                            </tr>
                        </thead>
                        <tbody>
                            { employeesData.results.map((values) => {
                                return (
                                    <tr key={values.id}>
                                        <td>{values.id}</td>
                                        <td>{values.name}</td>
                                        <td>{values.middle_name}</td>
                                        <td>{values.last_name}</td>
                                        <td>{values.branch}</td>
                                    </tr>
                                )
                                
                            })
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-sm button-container">
                            { showButton ? <button onClick={backPage} className="btn btn-success"><ArrowBackIos /> </button> : '' }
                        </div>
                        <div className="col-sm button-container">
                            <button onClick={nextPage} className="btn btn-success">
                                <ArrowForwardIos />
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
    </div>
    );

}

export default ModalContainer;