import React from 'react'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Password } from 'primereact/password'
import PasswordFooter from '../../organisms/PasswordFooter'

const InputField = ({
    name,
    value,
    formik,
    label,
    isPassword = false,
    onChange,
    isFormFieldValid,
    getFormErrorMessage
}) => (
    <div className="field">
        <span className="p-float-label">
            {!isPassword ?
                <InputText id={name} name={name} value={value} onChange={onChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(name, formik) })} />
                :
                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                    className={classNames({ 'p-invalid': isFormFieldValid('password', formik) })} header={<h6>Pick a password</h6>} footer={PasswordFooter} />
            }
            <label htmlFor={name} className={classNames({ 'p-error': isFormFieldValid(name, formik) })}>{label}</label>
        </span>
        {getFormErrorMessage(name, formik)}
    </div>
)

export default InputField