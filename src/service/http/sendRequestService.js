import createAxiosInstance from "../../configuration/http/axiosConfiguration";


function createConfig(params = []) {
    return {
        params: createParams(params)
    }
}

function createParams(params) {
    const urlParams = new URLSearchParams();
    params.forEach(p => {
        const {key, value} = createKeyValuePair(p);
        urlParams.append(key, value);
    })
    return urlParams;
}

function createKeyValuePair(param) {
    const key = Object.keys(param)[0];
    const value = param[key];
    return {key, value};
}

const sendRequestService = {
    post: function (endpoint, body = {}, params=[]) {
        return createAxiosInstance()
            .post(endpoint, body, createConfig(params));
    },
    patch: function (endpoint, body = {}, params = []) {
        return createAxiosInstance()
            .patch(endpoint, body, createConfig(params));
    }
}


export default sendRequestService;