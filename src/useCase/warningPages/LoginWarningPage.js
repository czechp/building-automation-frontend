import styled from "styled-components";

import WarningPageCmp from "../../component/WarningPageCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {useNavigate} from "react-router-dom";

const LoginWarningPage = () => {
    const navigate = useNavigate();

    return <WarningPageCmp title="Access denied">
        <Text> In order to get access this page have to login in.</Text>
        <ButtonCmp label="Login" width={"50"} onClick={()=>navigate("/login")}/>
    </WarningPageCmp>
}

const Text = styled.p`
  text-align: center;
`;

export default LoginWarningPage;

