import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const service = {
    addExpense: async (expense) => {
        const response = await axios.post(BASE_URL + '/expenses', expense);
        return response
    },
    getExpenses: async () => {
        const response = await axios.get(BASE_URL + '/expenses?limit=5&skip=0');
        return response.data;
    }
}

export default service;