export const isFormFieldValid = (name, formik) => !!(formik?.touched[name] && formik?.errors[name]);

export const getFormErrorMessage = (name, formik) => {
    return isFormFieldValid(name, formik) && <small className="p-error">{formik?.errors[name]}</small>;
};