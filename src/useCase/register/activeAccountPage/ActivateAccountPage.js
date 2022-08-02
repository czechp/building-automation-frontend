import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import FormCmp from "../../../component/FormCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";

const ActivateAccountPage = () => {
    const {state: activationCode} = useLocation();

    return <PageCmp title="Activate account">
        <DevelopmentSection activationCode={activationCode}/>
        <ActivationForm activationCode={activationCode}/>
    </PageCmp>
}

const DevelopmentSection = ({activationCode}) => {
    return <>
        {activationCode && <DevelopmentContainer>
            It's a development mode your activation code will fill automatically.
            <hr/>
        </DevelopmentContainer>}
    </>
}

const ActivationForm = ({activationCode: myActivationCode}) => {
    const ACTIVATION_ENDPOINT = "/api/accounts/email-confirmation";
    const [activationCode, setActivationCode] = React.useState(myActivationCode || "");

    function activationBtnOnClick(){

    };

    return <FormCmp>
        <TextInputCmp label="Activation code:"
                      value={activationCode}
                      onChange={setActivationCode}
                      placeholder="Type your activation code from email message"/>
        <ButtonCmp label="Activate account" onClick={activationBtnOnClick}/>
    </FormCmp>
}

const DevelopmentContainer = styled.div`
  color: ${({theme}) => theme.colors.primary};
  font-size: 20px;
  font-style: italic;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`


export default ActivateAccountPage;