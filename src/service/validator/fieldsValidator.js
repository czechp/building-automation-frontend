import emailValidator from "email-validator";

export const fieldsValidator = {
    minimumLength: function (text, length) {
        return text.length >= length
    },
    emailFormat: function (email) {
        return emailValidator.validate(email);
    }
}