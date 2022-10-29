import React from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import './css/AddUserForm.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const FormikFormDemo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      rfid: '',
      contact: '',
      subscription: '',
      tsname: location.state.tsname,
      accept: false,
    },

    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = 'Name is required.';
      }

      if (!data.email) {
        errors.email = 'Email is required.';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = 'Invalid email address. E.g. example@email.com';
      }

      if (!data.accept) {
        errors.accept = 'You need to agree to the terms and conditions.';
      }

      return errors;
    },

    onSubmit: (data) => {
      axios.post('http://localhost:8000/customer', data).then(() => {
        navigate('/');
      });
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Register</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    'p-invalid': isFormFieldValid('name'),
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    'p-error': isFormFieldValid('name'),
                  })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage('name')}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    'p-invalid': isFormFieldValid('email'),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    'p-error': isFormFieldValid('email'),
                  })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage('email')}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="rfid"
                  name="rfid"
                  value={formik.values.rfid}
                  onChange={formik.handleChange}
                  autoFocus
                />
                <label htmlFor="rfid">Customer Id*</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="contact"
                  name="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  autoFocus
                />
                <label htmlFor="rfid">Contact</label>
              </span>
            </div>
            <div className="field ">
              <span className="p-float-label">
                <InputText
                  id="subscription"
                  name="subscription"
                  value={formik.values.subscription}
                  onChange={formik.handleChange}
                  autoFocus
                />
                <label htmlFor="subscription">Subscription</label>
              </span>
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="accept"
                name="accept"
                checked={formik.values.accept}
                onChange={formik.handleChange}
                className={classNames({
                  'p-invalid': isFormFieldValid('accept'),
                })}
              />
              <label
                htmlFor="accept"
                className={classNames({
                  'p-error': isFormFieldValid('accept'),
                })}
              >
                I agree to the terms and conditions*
              </label>
            </div>
            <Button type="submit" label="Submit" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormikFormDemo;
