import {Navigate} from "react-router-dom";

import authorizationService from "../service/authorization/authorizationService";

const LoginGuard = ({children}) => {
    return authorizationService.isLogged() ? children : <Navigate to="/not-logged"/>
}

export default LoginGuard;