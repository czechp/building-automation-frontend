const accountRoleConverter = {
    toText: function (role) {
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
    }
}

export default accountRoleConverter;