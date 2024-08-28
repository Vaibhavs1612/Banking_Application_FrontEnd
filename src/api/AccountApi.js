import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/accounts';

export const createAccount = (accountDto) => axios.post(BASE_URL, accountDto);

export const getAccountById = (id) => axios.get(`${BASE_URL}/${id}`);

export const deposit = (id, amount) => axios.put(`${BASE_URL}/deposit/${id}`, { amount });

export const withdraw = (id, amount) => axios.put(`${BASE_URL}/withdraw/${id}`, { amount });

export const getAllAccounts = () => axios.get(BASE_URL);

export const deleteAccount = (id) => axios.delete(`${BASE_URL}/${id}`);
