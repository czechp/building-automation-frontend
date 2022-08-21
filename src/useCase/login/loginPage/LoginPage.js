import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import PageCmp from "../../../component/PageCmp";
import FormCmp from "../../../component/FormCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import {StatementContext} from "../../../App";
import {FieldsValidator} from "../../../service/validator/fieldsValidator";
import SendRequestService from "../../../service/http/sendRequestService";
import AuthorizationService from "../../../service/authorization/authorizationService";
import httpErrorHandler from "../../../service/http/httpErrorHandler";

const LoginPage = () => {
    const MINIMUM_FIELDS_LENGTH = 3;
    const LOGIN_ENDPOINT = "/api/accounts/login";

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    const fieldsValidator = new FieldsValidator();

    function validateFields() {
        return [username, password].every(f => fieldsValidator.minimumLength(f, MINIMUM_FIELDS_LENGTH));
    }

    function loginSuccessfully(response) {
        const authorizationService = new AuthorizationService();
        showSuccessInfo("Login successfully");
        authorizationService.storeUserInfo({...response.data, password});
        navigate("/")
    }

    function sendAuthorizeRequest() {
        const sendRequestService = new SendRequestService();
        sendRequestService.post(LOGIN_ENDPOINT, {username, password})
            .then((response) => loginSuccessfully(response))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function loginBtnOnClick() {
        if (validateFields())
            sendAuthorizeRequest();
        else showErrorInfo("Check correctness of fields");
    }

    function registerBtnOnClick() {
        navigate("/register");
    }

    function activateAccountBtnClick() {
        navigate("/activate-account");
    }

    return <PageCmp title="Login">
        <FormCmp>
            <TextInputCmp placeholder="Type your login" label="Username:" value={username} onChange={setUsername}
                          minLength={3}/>
            <TextInputCmp type="password" placeholder="Type your password" label="Password:" value={password}
                          onChange={setPassword} minLength={3}/>
            <ButtonCmp label="Sign in" onClick={loginBtnOnClick}/>
            <RestorePasswordInfo>If do not remember password <RestorePasswordLink href="/restore-password-demand">restore it</RestorePasswordLink> .</RestorePasswordInfo>
            <ButtonCmp label="Register" onClick={registerBtnOnClick}/>
            <ButtonCmp label="Activate account" onClick={activateAccountBtnClick}/>
        </FormCmp>
    </PageCmp>
}

const RestorePasswordInfo = styled.p`
  margin-top: 0;
  font-size: smaller;
  font-style: italic;
`;

const RestorePasswordLink = styled.a``;

export default LoginPage;