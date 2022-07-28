import styled from "styled-components";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleExclamation, faXmark} from "@fortawesome/free-solid-svg-icons";

import colors from "../configuration/style/colors";
import {StatementContext} from "../App";

const StatementCmp = () => {
    const VISIBILITY_DURATION_MILLISECONDS = 3000;
    const {text, error, setStatement} = React.useContext(StatementContext);
    const [visibility, setVisibility] = React.useState(false);
    const color = error ? colors.danger : colors.success;
    const icon = error ? faCircleExclamation : faCircleCheck;

    function closeStatement() {
        setStatement({text: "", error: false});
        setVisibility(false);
    }

    const showStatementIfExists = function () {
        if (text) {
            setVisibility(true);
            setTimeout(() => {
                closeStatement();
            }, VISIBILITY_DURATION_MILLISECONDS);
        }
    }

    React.useEffect(showStatementIfExists, [text, setStatement]);

    return <>
        {visibility && <Container color={color}>
            <FontAwesomeIcon icon={icon} color={color} size={"5x"} style={{marginRight: "50px"}} />
            <FontAwesomeIcon icon={faXmark} style={xMarkStyle} size={"2x"} onClick={closeStatement} />
            {text}
        </Container>}
    </>
}

const Container = styled.div`
  border: ${({color}) => `2px solid ${color}`};
  color: ${({color}) => color};
  background-color: ${({theme}) => theme.colors.background};
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
const xMarkStyle ={
    position: "absolute",
    top: "5px",
    right: "15px",
    cursor: "pointer"
}
export default StatementCmp;