import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import TextInputCmp from "../../component/TextInputCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {StatementContext} from "../../App";
import {fieldsValidator} from "../../service/validator/fieldsValidator";
import sendPostRequest from "../../service/http/sendPostRequest";

const RegisterPage = () => {
    const MIN_FIELD_LENGTH = 3;
    const REGISTER_ENDPOINT = "/api/accounts";

    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const formFields = useRegisterFormField();

    function lengthValidation() {
        const lengthValidated = [formFields.username, formFields.email, formFields.passwordConfirm, formFields.password]
            .every((f) => fieldsValidator.minimumLength(f, MIN_FIELD_LENGTH));
        if (!lengthValidated) showErrorInfo("Check length of fields.");

        return lengthValidated;
    }

    function emailValidation() {
        const emailValidated = fieldsValidator.emailFormat(formFields.email);
        if (!emailValidated) showErrorInfo("Email format incorrect.");

        return emailValidated;
    }

    function passwordEqualityValidation() {
        const passwordsEqual = formFields.password === formFields.passwordConfirm;
        if (!passwordsEqual) showErrorInfo("Passwords are not equal.")

        return passwordsEqual;
    }

    function validateForms() {
        const lengthValidated = lengthValidation();
        const emailValidated = emailValidation();
        const passwordsValidated = passwordEqualityValidation();

        return lengthValidated && emailValidated && passwordsValidated;
    }

    function sendRegisterRequest() {
        const requestBody = {
            username: formFields.username,
            email: formFields.email,
            password: formFields.password,
            passwordConfirm: formFields.passwordConfirm
        };
        //TODO: resolve error
        sendPostRequest(REGISTER_ENDPOINT, requestBody)
            .then((response) => {
                showSuccessInfo("Account created");
            })
            .catch((error) => {
                console.log(error)
            });
    }

    function registerBtnOnClick() {
        if (validateForms())
            sendRegisterRequest();

    }

    return <PageCmp title="Register">
        <FormCmp title="Register">
            <TextInputCmp label={"Username:"} value={formFields.username} onChange={formFields.setUsername}
                          minLength={3} placeholder="Type username"/>
            <TextInputCmp label={"Email:"} value={formFields.email} onChange={formFields.setEmail} minLength={3}
                          placeholder="Type email"/>
            <TextInputCmp label={"Password:"} value={formFields.password} onChange={formFields.setPassword}
                          minLength={3} placeholder="Type password" type="password"/>
            <TextInputCmp label={"Password confirmation:"} value={formFields.passwordConfirm}
                          onChange={formFields.setPasswordConfirm} minLength={3} placeholder="Confirm password"
                          type="password"/>
            <ButtonCmp label="Register" onClick={registerBtnOnClick}/>
        </FormCmp>
    </PageCmp>
}

function useRegisterFormField() {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm
    }
}

export default RegisterPage;