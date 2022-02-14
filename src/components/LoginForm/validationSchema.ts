import * as yup from "yup";
import {useTranslation} from "react-i18next";

export default function ValidationSchema() {
    const {t} = useTranslation();
    return yup.object().shape({
        firstName: yup.string().typeError(t("name_required")).required(t("must_be_string")),
        password: yup.string().typeError(t("must_be_string")).required(t("password_required")),
        confirmPassword: yup.string().oneOf([yup.ref('password')], t("password_mismatch")).required(t("confirmation_required")),
    });
}
