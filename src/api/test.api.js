import Axios from "axios";
import { AWS_TEST_URL, API_KEY } from '../env';

const TEST_API = Axios.create({
    baseURL: AWS_TEST_URL,
    headers: {
        'x-api-key': API_KEY
    }
});

export default TEST_API;
