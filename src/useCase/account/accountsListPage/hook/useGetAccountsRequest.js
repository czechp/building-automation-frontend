import React, {useEffect} from "react";
import sendRequestService from "../../../service/http/sendRequestService";
import {StatementContext} from "../../../App";
import httpErrorHandler from "../../../service/http/httpErrorHandler";

function useGetAccountsRequest(sort) {
    const ACCOUNTS_ENDPOINT = "/api/accounts";
    const [accounts, setAccounts] = React.useState([]);
    const {showErrorInfo} = React.useContext(StatementContext);

    useEffect(function () {
        console.log("Invoked")
        sendRequestService.get(ACCOUNTS_ENDPOINT)
            .then((response) => setAccounts(response.data))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }, [sort]);

    return accounts;
}

export default useGetAccountsRequest;