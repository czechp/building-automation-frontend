import React from "react";
import styled from "styled-components";

import PageCmp from "../../component/PageCmp";
import FormCmp from "../../component/FormCmp";
import TextInputCmp from "../../component/TextInputCmp";
import ButtonCmp from "../../component/ButtonCmp";

const LoginPage = () => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <PageCmp title="Login">
        <FormCmp>
            <TextInputCmp placeholder="Type your login" label="Username:" value={login} onChange={setLogin}
                          minLength={3}/>
            <TextInputCmp type="password" placeholder="Type your password" label="Password:" value={password}
                          onChange={setPassword} minLength={3}/>
            <ButtonCmp label="Sing in" />
            <RegisterInfo>If you do not have an account </RegisterInfo>
            <ButtonCmp label="Register"  />
        </FormCmp>
    </PageCmp>
}

const RegisterInfo = styled.p`
    font-style: italic;
`

export default LoginPage;