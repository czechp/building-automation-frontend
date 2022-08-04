function toText() {
    return function (role) {
        switch (role) {
            case "ADMIN":
                return "Administrator";
            case "SUPERUSER":
                return "Superuser";
            case "USER":
                return "User";
            default:
                return "Not recognized";
        }
    };
}

function AccountRoleConverter() {
    this.toText = toText;
}


export default AccountRoleConverter;