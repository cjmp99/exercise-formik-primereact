import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import { CountryService } from './services/countryService';
import Alert from './components/atoms/Dialog';
import InputField from './components/atoms/InputField';
import useOnChange from './hooks/useOnChange/useOnChange';
import { getFormErrorMessage, isFormFieldValid } from './utils/getFormErrorMessage';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const { formData, showMessage, formik, setShowMessage } = useOnChange();
  const countryservice = new CountryService();

  useEffect(() => {
    countryservice.getCountries().then(data => setCountries(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="form-demo">
      <Alert
        visible={showMessage}
        position='top'
        title='Registration Successful!'
        message={<>Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.</>}
        onHide={() => setShowMessage(false)}
      />

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Register</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <InputField
              name='name'
              formik={formik}
              label='Name*'
              value={formik.values.name}
              onChange={formik.handleChange}
              getFormErrorMessage={getFormErrorMessage}
              isFormFieldValid={isFormFieldValid}
            />
            <InputField
              name='email'
              formik={formik}
              label='Email*'
              value={formik.values.email}
              onChange={formik.handleChange}
              getFormErrorMessage={getFormErrorMessage}
              isFormFieldValid={isFormFieldValid}
            />
            <InputField
              isPassword
              name='password'
              formik={formik}
              label='Password*'
              value={formik.values.password}
              onChange={formik.handleChange}
              getFormErrorMessage={getFormErrorMessage}
              isFormFieldValid={isFormFieldValid}
            />
            <div className="field">
              <span className="p-float-label">
                <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                <label htmlFor="date">Birthday</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <Dropdown id="country" name="country" value={formik.values.country} onChange={formik.handleChange} options={countries} optionLabel="name" />
                <label htmlFor="country">Country</label>
              </span>
            </div>
            <div className="field-checkbox">
              <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept', formik) })} />
              <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept', formik) })}>I agree to the terms and conditions*</label>
            </div>

            <Button type="submit" label="Submit" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
