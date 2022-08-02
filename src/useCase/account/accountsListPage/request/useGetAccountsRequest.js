import React, {useEffect} from "react";
import sendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

function useGetAccountsRequest() {
    const ACCOUNTS_ENDPOINT = "/api/accounts";
    const [accounts, setAccounts] = React.useState([]);
    const {showErrorInfo} = React.useContext(StatementContext);

    useEffect(function () {
        sendRequestService.get(ACCOUNTS_ENDPOINT)
            .then((response) => setAccounts(response.data))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }, []);

    return accounts;
}

export default useGetAccountsRequest;