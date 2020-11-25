import React, {useEffect, useState} from 'react';
import ModalContainer from '../ModalContainer/modalContainer';
import { Modal } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { getAllBranches, getEmployeesByBranch } from '../../utils/methods';
import './index.scss';

const Branch = () => {
    const [ branches, setBranches ] = useState([]);
    const [employeeInfo, setEmployeeInfo] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getAllBranches().then(res => {
            setBranches(res.data.results)
        }).catch(e => {
            console.log(e);
        })
    }, []);

    const getEmployeeInfoByBranch = (id) => {
        getEmployeesByBranch(id).then(res => {
            setEmployeeInfo(res.data);
            handleOpen();
        }).catch(e => {
            console.log(e);
        })
    }


    return (
        <div>
        <div className="container">
            <table className="table table-dark">
                <thead>
                    <tr className="table-col">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Bank</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                
                    { branches.map((values) => {
                        return (
                            <tr key={values.id}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.bank}</td>
                                <td onClick={() => getEmployeeInfoByBranch(values.id)}><Info style={{ color: "#3CBA68" }} /></td> 
                            </tr>
                        )
                        
                    })
                    }
                </tbody>
            </table>
            </div>
                <Modal className="modal-container" open={open} onClose={handleClose}>
                    <ModalContainer employeeInfo={employeeInfo} />
                </Modal>
            </div>
    );
}

export default Branch;