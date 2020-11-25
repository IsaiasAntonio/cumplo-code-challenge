import axios from 'axios';

export default axios.create({
    baseURL: 'https://tryouts-cumplo.herokuapp.com',
    headers: {
        "Content-type": "application/json"
    }
})