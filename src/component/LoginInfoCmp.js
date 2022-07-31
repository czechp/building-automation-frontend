import React from "react";
import styled from "styled-components";

import authorizationService from "../service/authorization/authorizationService";
import ButtonCmp from "./ButtonCmp";
import {useNavigate} from "react-router-dom";

const LoginInfoCmp = () => {
    const navigate = useNavigate();
    const userLogged = authorizationService.isLogged();
    const userInfo = authorizationService.getUserInfo();

    function logoutBtnOnClick() {
        authorizationService.logout();
        navigate("/login");
    }

    return <Container>
        {userLogged &&
            <>
                <UserInfo>{userInfo.username}</UserInfo>
                <UserInfo>{userInfo.email}</UserInfo>
                <ButtonCmp label="Logout"
                           color="danger"
                           style={{marginTop: "10px", marginBottom: "10px"}}
                           onClick={logoutBtnOnClick}
                />
            </>
        }
    </Container>

}
const Container = styled.div`
  height: 50%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`

const UserInfo = styled.span`
  font-size: smaller;
  margin-top: 3px;
  font-style: italic;
`

export default LoginInfoCmp;