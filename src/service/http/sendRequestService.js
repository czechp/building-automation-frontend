import createAxiosInstance from "../../configuration/http/axiosConfiguration";


const sendRequestService = {
    post: function (endpoint, body = {}) {
        return createAxiosInstance()
            .post(endpoint, body);
    },
    patch:  function (endpoint, body = {}) {
        return createAxiosInstance()
            .patch(endpoint, body);
    }
}


export default sendRequestService;