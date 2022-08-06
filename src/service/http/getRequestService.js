import React from "react";

import SendRequestService from "./sendRequestService";
import {StatementContext} from "../../App";
import httpErrorHandler from "./httpErrorHandler";

const NO_SORTING = "NO_SORTING";

function GetRequestService() {
    this._statementHandler = React.useContext(StatementContext);
    this._sendRequestService = new SendRequestService();
    this.getObjectsArray = useGetObjectsArray;

    return this;
};

function useGetObjectsArray(endpoint, params = []) {
    const [objects, setObjects] = React.useState([]);
    const {sorting, setSortingField} = useSortingHook();

    React.useEffect(
        () => {
            const sortingParams = createSortingParams(sorting);
            const requestParams = [...sortingParams, ...params];
            this._sendRequestService.get(endpoint, requestParams)
                .then((response) => setObjects(response.data))
                .catch((error) => this._statementHandler.showErrorInfo(httpErrorHandler(error)));
        }
        , [sorting]);

    return {objects, setSortingField};
}

export const useSortingHook = (field = NO_SORTING, asc = true) => {
    const [sorting, setSorting] = React.useState({field, asc});
    return {
        sorting,
        setSortingField: (field) => setSorting(prevState => ({asc: !prevState.asc, field: field}))
    }
}

function createSortingParams({field, asc}) {
    if (field !== NO_SORTING) {
        const paramsArray = [];
        let sortingParam = `${field},${asc ? "asc" : "desc"}`
        paramsArray.push({sort: sortingParam});
        return paramsArray;
    } else
        return [];
}

export default GetRequestService;