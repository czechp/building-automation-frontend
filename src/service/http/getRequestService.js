import React from "react";

import SendRequestService from "./sendRequestService";
import createSortingParams from "./createSortingParams";
import {StatementContext} from "../../App";
import httpErrorHandler from "./httpErrorHandler";

function GetRequestService() {
    this._statementHandler = React.useContext(StatementContext);
    this._sendRequestService = new SendRequestService();
    this.getObjectsArray = useGetObjectsArray;

    return this;
};

function useGetObjectsArray(endpoint, sorting = {field: "id", desc: true}, params = []) {
    const [objects, setObjects] = React.useState([]);
    const sortingParams = createSortingParams(sorting);
    const requestParams = [...sortingParams, ...params];

    React.useEffect(
        () => {
            this._sendRequestService.get(endpoint, requestParams)
                .then((response) => setObjects(response.data))
                .catch((error) => this._statementHandler.showErrorInfo(httpErrorHandler(error)));
        }
        , [sorting]);

    return objects;
}


export default GetRequestService;