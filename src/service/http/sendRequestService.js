import createAxiosInstance from "../../configuration/http/axiosConfiguration";


const sendRequestService = {
    post: function (endpoint, body = {}) {
        return createAxiosInstance()
            .post(endpoint, body);
    }
}


export default sendRequestService;