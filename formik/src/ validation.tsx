import { EMAIL_NOT_VALID, EMAIL_REQUIRED, LAST_NAME_LENGTH, LAST_NAME_REQUIRED, NAME_LENGTH, NAME_REQUIRED, PASSWORD_LENGTH, PASSWORD_REQUIRED } from "./errors";
import { ICreateAccountForm } from "./types";

export const CreateAccountFormValidation = (data: ICreateAccountForm) => {
    let errors: ICreateAccountForm = {};

    const validate = () => {
        validateName();
        validateEmail();
        validateLastName();
        validatePassword();

        return errors;
    };

    const validateName = () => {
        errors.firstName = '';

        if (!data.firstName) { 
            errors.firstName = NAME_REQUIRED;
        } else if (data.firstName?.length < 3 || data.firstName?.length > 20) { 
            errors.firstName = NAME_LENGTH;
        }
    }

    const validateLastName = () => {
        errors.lastName = '';

        if (!data.lastName)
            errors.lastName = LAST_NAME_REQUIRED;
        else if (data.lastName.length < 3 || data.lastName.length > 20) 
            errors.lastName = LAST_NAME_LENGTH;
    }

    const validateEmail = () => {
        errors.email = '';
        if (!data.email)
            errors.email = EMAIL_REQUIRED;
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
            errors.email = EMAIL_NOT_VALID;
    }

    const validatePassword = () => {
        errors.password = '';
        if (!data.password)
            errors.password = PASSWORD_REQUIRED;
        else if (data.password.length < 6 || data.password.length > 12) 
            errors.password = PASSWORD_LENGTH;
    }

    return validate();
}