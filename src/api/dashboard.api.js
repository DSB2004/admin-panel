import axios from "axios";

import { BACKEND_URL, API_KEY } from "../config/index.config";



const DASHBOARD_API = axios.create(BACKEND_URL + '/login', {
    headers: {
        'x-api-key': API_KEY,
    }
});


export default DASHBOARD_API;