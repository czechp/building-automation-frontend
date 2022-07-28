import React from "react";
import styled from "styled-components";


import colors from "../configuration/colors";
import StatementCmp from "./StatementCmp";


const PageCmp = ({title, children}) => {
    return <Container>
        <Title>{title}</Title>
        <hr width="30%" align="left" color={colors.primary}/>
            <Content>{children}</Content>
            <StatementCmp/>
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