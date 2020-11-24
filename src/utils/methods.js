import baseUrl from './calls';

const getAllBanks = () => {
    return baseUrl.get('/banks/');
}

const getAllEmployees = () => {
    return baseUrl.get('/employees/');
}

const getAllBranches = () => {
    return baseUrl.get('/branches/');
}

const createEmployee = (data) => {
    return baseUrl.post("/employees/", data);
}

const getEmployeesByBranch = (id) => {
    return baseUrl.get(`/employees/?branch=${id}`);
}

export {
    getAllBanks,
    getAllBranches,
    getAllEmployees,
    createEmployee,
    getEmployeesByBranch
};