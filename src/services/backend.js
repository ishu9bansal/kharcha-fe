import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const service = {
    addExpense: async (expense) => {
        const response = await axios.post(BASE_URL + '/expenses', expense);
        return response
    },
}

export default service;