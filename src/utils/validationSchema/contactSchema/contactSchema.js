import * as Yup from "yup";
import { emailValidation,nameValidation } from "../commonValidation";

export const contactInitialValues = {
    name: "",
    email: "",
    subject: "",
    message:""
};

export const contactSchema = Yup.object().shape({
    name: nameValidation,
    email : emailValidation,
    subject: nameValidation,
    message :nameValidation
});
