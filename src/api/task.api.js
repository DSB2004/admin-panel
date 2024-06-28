import Axios from "axios";
import { AWS_URL, API_KEY } from '../env';

const TASK_API = Axios.create({
    baseURL: AWS_URL + "/task",
    headers: {
        'x-api-key': API_KEY
    }
});

export default TASK_API;
