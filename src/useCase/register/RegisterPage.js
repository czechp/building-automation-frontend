import React from "react";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import TextInputCmp from "../../component/TextInputCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {StatementContext} from "../../App";

const RegisterPage = () => {
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const formFields = useRegisterFormField();

    return <PageCmp title="Register">
        <FormCmp title="Register">
            <TextInputCmp label={"Username:"} value={formFields.username} onChange={formFields.setUsername}
                          minLength={3} placeholder="Type username"/>
            <TextInputCmp label={"Email:"} value={formFields.email} onChange={formFields.setEmail} minLength={3}
                          placeholder="Type email"/>
            <TextInputCmp label={"Password:"} value={formFields.password} onChange={formFields.setPassword}
                          minLength={3} placeholder="Type password"/>
            <TextInputCmp label={"Password confirm:"} value={formFields.passwordConfirm}
                          onChange={formFields.setPasswordConfirm} minLength={3} placeholder="Confirm password "/>
            <ButtonCmp label="Register" />
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