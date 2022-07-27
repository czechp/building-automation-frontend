import styled from "styled-components";
import React from "react";


import colors from "../configuration/colors";
import StatementCmp from "./StatementCmp";

export const StatementContext = React.createContext({});

const PageCmp = ({title, children}) => {
    const [statement, setStatement] = React.useState({text: "", error: false});

    const setErrorStatement = (text) => {
        setStatement({text, error: true});
    }
    const setSuccessStatement = (text) => {
        setStatement({text, error: false});
    }

    return <Container>
        <Title>{title}</Title>
        <hr width="30%" align="left" color={colors.primary}/>
        <StatementContext.Provider value={{
            text: statement.text,
            error: statement.error,
            setErrorStatement,
            setSuccessStatement
        }}>
            <Content>{children}</Content>
            <StatementCmp/>
        </StatementContext.Provider>
    </Container>

}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
    align-self: flex-start;
    margin-bottom: 0px;
`

const Content = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 60%;
`


export default PageCmp;