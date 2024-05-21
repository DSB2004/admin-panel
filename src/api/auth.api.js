import axios from "axios";
import { BACKEND_URL, API_KEY } from "../config/index.config";



const AUTH_API = axios.create(BACKEND_URL + '/login', {

    headers: {
        'x-api-key': API_KEY,
    }
}
);


export default AUTH_API;