import styled from "styled-components";

import colors from "../configuration/colors";
import StatementCmp from "./StatementCmp";
import {createContext, useState} from "react";

export const StatementContext = createContext({});

const PageCmp = ({title, children}) => {
    const [statement, setStatement] = useState({text: "", error: false});

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
`

const Title = styled.h2`
`

const Content = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  width: 60%;
`


export default PageCmp;