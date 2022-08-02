import {fieldsValidator} from "../../../../service/validator/fieldsValidator";
import UUID_LENGTH from "../../../../constant/UUID";

function activationCodeFieldValidator(activationCode) {
    return fieldsValidator.minimumLength(activationCode, UUID_LENGTH);
}

export default activationCodeFieldValidator;