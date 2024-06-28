import axios from "axios";
import { AWS_URL, API_KEY } from "../env";



const AUTH_API = axios.create({
    baseURL: AWS_URL + "/log_reg",
    headers: {
        'x-api-key': API_KEY,
    }
}
);


export default AUTH_API;