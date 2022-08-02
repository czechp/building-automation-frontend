import {Navigate} from "react-router-dom";
import authorizationService from "../service/authorization/authorizationService";

const AdminGuard = ({children}) => {
    const accessPermitted = authorizationService.isLogged() && authorizationService.isAdmin();
    return accessPermitted ? children : <Navigate to="/admin-access"/>;
}

export default AdminGuard;