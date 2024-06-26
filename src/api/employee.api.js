import Axios from 'axios';
import { AWS_URL, API_KEY } from '../env';


const EMPLOYEE_API = Axios.create({
    baseURL: AWS_URL + "/employee",
    headers: {
        'x-api-key': API_KEY
    }
});



export default EMPLOYEE_API;

