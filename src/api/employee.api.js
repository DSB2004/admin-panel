import Axios from 'axios';
import { AWS_URL, API_KEY } from '../config/index.config';
import GetCredentials from '../utils/get_credentials.util';


const EMPLOYEE_API = Axios.create({
    baseURL: AWS_URL + "/employee",
    headers: {
        'x-api-key': API_KEY,
        'panelid': GetCredentials().admpnlId,
        'login_id': GetCredentials().loginid
    }
});


export default EMPLOYEE_API;
