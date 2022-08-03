import React, {useEffect} from "react";
import sendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import createSortingParams from "../../../../service/http/createSortingParams";

function useGetAccountsRequest(sort) {
    const ACCOUNTS_ENDPOINT = "/api/accounts";
    const [accounts, setAccounts] = React.useState([]);
    const {showErrorInfo} = React.useContext(StatementContext);

    useEffect(function () {
        const sortingParams = createSortingParams(sort);
        sendRequestService.get(ACCOUNTS_ENDPOINT, sortingParams)
            .then((response) => setAccounts(response.data))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }, [sort, showErrorInfo]);

    return accounts;
}

export default useGetAccountsRequest;