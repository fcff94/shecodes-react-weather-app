import axios from "axios";
import { API_BASE_URL, API_KEY } from './config';


const apiService = axios.create({
    baseURL: API_BASE_URL,
    params: {
        appid: API_KEY,
        units: 'metric',
    },
    headers: {
        'Content-Type': 'application/json'
    },
});

export default apiService;