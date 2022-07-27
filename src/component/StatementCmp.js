import styled from "styled-components";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

import {StatementContext} from "./PageCmp";
import colors from "../configuration/colors";

const StatementCmp = () => {
    const VISIBILITY_DURATION_MILLISECONDS = 5000;
    const {text, error} = React.useContext(StatementContext);
    const [visibility, setVisibility] = React.useState(false);
    const color = error ? colors.danger : colors.success;
    const icon = error ? faCircleExclamation : faCircleCheck;

    const showStatementIfExists = function () {
        if (text) {
            setVisibility(true);
            setTimeout(() => setVisibility(false), VISIBILITY_DURATION_MILLISECONDS);
        }
    }

    React.useEffect(showStatementIfExists, [text]);

    return <>
        {visibility && <Container color={color}>
            <FontAwesomeIcon icon={icon} color={color} size={"5x"} style={{marginRight: "50px"}} />
            {text}
        </Container>}
    </>
}

const Container = styled.div`
  border: ${({color}) => `2px solid ${color}`};
  color: ${({color}) => color};
  width: 500px;
  min-height: 70px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 20px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

`

export default StatementCmp;