import React from "react";

export function createStatementContext() {
    return React.createContext({});
}

export function useProvideStatementValues() {
    const [statement, setStatement] = React.useState({text: "", error: false});

    return {
        text: statement.text,
        error: statement.error,
        showErrorInfo: function (text) {
            setStatement({text: text, error: true})
        },
        setSuccessInfo: function (text) {
            setStatement({text: text, error: false})
        }
    }
}
