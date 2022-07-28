import axios from "axios";
import {BACKEND_URL} from "../../constant/URL";

function createAxiosInstance() {
    const axiosInstance = axios.create(
        {
            baseURL: BACKEND_URL
        }
    );
    return axiosInstance;
}

export default createAxiosInstance;