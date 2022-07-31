import storageService from "../storage/storageService";

const ID = "id";
const USERNAME = "username";
const EMAIL = "email";
const ROLE = "role";
const AUTHORIZATION_HEADER = "authorizationHeader"

const authorizationService = {
    storeUserInfo, getUserInfo, isLogged, isAdmin, logout
};

function storeUserInfo({id, username, password, email, role}) {
    storageService.saveValue(ID, id);
    storageService.saveValue(USERNAME, username);
    storageService.saveValue(EMAIL, email);
    storageService.saveValue(ROLE, role);
    storageService.saveValue(AUTHORIZATION_HEADER, createBasicAuthorizationHeader(username, password));
}

function createBasicAuthorizationHeader(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
}

function getUserInfo() {
    return {
        id: storageService.readValue(ID),
        username: storageService.readValue(USERNAME),
        email: storageService.readValue(EMAIL),
        role: storageService.readValue(ROLE),
        authorizationHeader: storageService.readValue(AUTHORIZATION_HEADER)
    };
}

function isLogged() {
    return !!storageService.readValue(AUTHORIZATION_HEADER);
}

function isAdmin() {
    return storageService.readValue(ROLE) === "ADMIN";
}

function logout() {
    storageService.clearStorage();
}

export default authorizationService;