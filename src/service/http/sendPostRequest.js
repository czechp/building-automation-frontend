import createAxiosInstance from "../../configuration/http/axiosConfiguration";

function sendPostRequest(endpoint, body = {}) {
    return createAxiosInstance()
        .post(endpoint, body);
}

export default sendPostRequest;