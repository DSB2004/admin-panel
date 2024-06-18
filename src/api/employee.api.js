import Axios from 'axios';
import { AWS_URL, API_KEY } from '../config/index.config';
import GetCredentials from '../utils/get_credentials.util';


export const EMPLOYEE_API = Axios.create({
    baseURL: AWS_URL + "/employee",
    headers: {
        'x-api-key': API_KEY
    }
});


export const CREATE_EMPLOYEE_API = Axios.create({
    baseURL: AWS_URL + "/employee",
    headers: {
        'x-api-key': API_KEY,
        'login_id': GetCredentials().loginid,
        'panelid': GetCredentials().panelid,


    }
});





