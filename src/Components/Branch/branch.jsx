import React, {useEffect, useState} from 'react';
import { getAllBranches } from '../../utils/methods';

const Branch = () => {
    const [ branches, setBranches ] = useState([]);

    useEffect(() => {
        getAllBranches().then(res => {
            setBranches(res.data.results)
        }).catch(e => {
            console.log(e);
        })
    }, []);


    return (
        <div className="container">
            <table className="table table-dark">
                <thead>
                    <tr className="table-col">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Bank</th>
                        <th scope="col">
                                Info
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                    { branches.map((values) => {
                        return (
                            <tr key={values.id}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.bank}</td>
                                <td><button className="btn btn-success">See Info</button></td> 
                            </tr>
                        )
                        
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Branch;