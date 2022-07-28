import React from "react";
import styled from "styled-components";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import TextInputCmp from "../../component/TextInputCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {StatementContext} from "../../App";
import {fieldsValidator} from "../../service/validator/fieldsValidator";
import sendPostRequest from "../../service/http/sendPostRequest";

const LoginPage = () => {
    const MINIMUM_FIELDS_LENGTH = 3;
    const LOGIN_ENDPOINT = "/api/accounts/login";

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);

    function validateFields() {
        return [username, password].every(f => fieldsValidator.minimumLength(f, MINIMUM_FIELDS_LENGTH));
    }

    function sendAuthorizeRequest() {
        sendPostRequest(LOGIN_ENDPOINT, {username, password})
            .then((response) => showSuccessInfo("Login successfully"))
            .catch((error) => console.log(error));
    }

    function loginOnClick() {
        if (validateFields())
            sendAuthorizeRequest();
        else showErrorInfo("Check correctness of fields");
    }

    return <PageCmp title="Login">
        <FormCmp>
            <TextInputCmp placeholder="Type your login" label="Username:" value={username} onChange={setUsername}
                          minLength={3}/>
            <TextInputCmp type="password" placeholder="Type your password" label="Password:" value={password}
                          onChange={setPassword} minLength={3}/>
            <ButtonCmp label="Sing in" onClick={loginOnClick}/>
            <RegisterInfo>If you do not have an account </RegisterInfo>
            <ButtonCmp label="Register"/>
        </FormCmp>
    </PageCmp>
}

const RegisterInfo = styled.p`
    font-style: italic;
`

export default LoginPage;