const createSortingParams = ({field, asc}) => {
    const paramsArray = [];
    let sortingParam = `${field},${asc ? "asc" : "desc"}`
    paramsArray.push({sort:sortingParam});
    return paramsArray;
}

export default createSortingParams;