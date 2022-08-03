import React from "react";

const useSortingHook = (field = "id", asc = true) => {
    const [sort, setSort] = React.useState({field, asc});
    return {
        sort,
        setField: function (field) {
            setSort({...sort, field})
        },
        toggleAsc: function () {
            setSort({...sort, asc: !sort.asc})
        }
    }
}

export default useSortingHook;