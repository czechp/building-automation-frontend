const storageService = {
    saveValue: function (valueName, value) {
        localStorage.setItem(valueName, value);
    },
    readValue: function (valueName) {
        return localStorage.getItem(valueName);
    },
    clearStorage: function () {
        localStorage.clear();
    }
};


export default storageService;