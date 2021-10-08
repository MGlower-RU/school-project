// import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router";

import Mastercard from '../images/mastercard.svg'
import Visa from '../images/visa.svg'

export default function Payment() {
  const history = useHistory()

  function validateNumber(value) {
    let error = "";
    if (!value || value === 0) {
      error = "*Required";
    } else if (String(value).length < 13) {
      error = "*Must be at least 13 characters long.";
    }
    return error;
  };
  
  function expDateValidate(value) {
    let error = "";
    if (!value) {
      error = "*Required";
    }
    return error;
  };

  function cvcValidate(value) {
    let error = "";
    if (!value || value === 0) {
      error = "*Required";
    } else if (String(value).length < 3) {
      error = "*CVC must be 3 characters long.";
    }
    return error;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target.closest('form'))
    fetch('/', {
      method: 'POST',
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (
    <main>
      <div className="payment">
        <h1>Add Credit Card Information</h1>
        <Formik
          initialValues={{
            isInitialValid: false,
            number: "",
            holder: "",
            month: "",
            year: "",
            CVC: ""
          }}
        >
          {({errors, touched, isValid, dirty, setValues, values}) => (
            <Form
              className='card__form'
              name="card"
              method="post"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Field type="hidden" name="form-name" value="card" />
              <div className="card__front">
                <Field
                  id='holder'
                  placeholder='Card holder'
                  name="holder"
                  type="text"
                />
                <div className="error__wrapper">
                  <Field
                    id='number'
                    placeholder='Card number'
                    name="number"
                    type="text"
                    maxLength="16"
                    onChange={e => {
                      const num = Number(e.target.value)
                        return isNaN(num) ? null : setValues({...values, number: e.target.value.replaceAll(' ', '')})
                    }}
                    validate={validateNumber}
                    />
                  {errors.number && touched.number && <div>{errors.number}</div>}
                </div>
                <div className="card__front__bottom">
                  <div className="error__wrapper">
                    <Field
                      id='month'
                      placeholder='MM'
                      name="month"
                      type="text"
                      maxLength="2"
                      validate={expDateValidate}
                      onChange={e => {
                        const num = Number(e.target.value)
                        return isNaN(num) ? null : setValues({...values, month: e.target.value.replaceAll(' ', '')})
                      }}
                    />
                    {errors.month && touched.month && <div>{errors.month}</div>}
                  </div>
                  <div className="error__wrapper">
                    <Field
                      id='year'
                      placeholder='YY'
                      name="year"
                      type="text"
                      maxLength="2"
                      validate={expDateValidate}
                      onChange={e => {
                        const num = Number(e.target.value)
                        return isNaN(num) ? null : setValues({...values, year: e.target.value.replaceAll(' ', '')})
                      }}
                    />
                    {errors.year && touched.year && <div>{errors.year}</div>}
                  </div>
                </div>
                <div className="card__available-methods">
                  <img src={Mastercard} alt="" />
                  <img src={Visa} alt="" />
                </div>
              </div>
              <div className="card__back">
                <div className="error__wrapper">
                  <Field
                    id='CVC'
                    placeholder='CVC'
                    name="CVC"
                    maxLength="3"
                    type="text"
                    validate={cvcValidate}
                    onChange={e => {
                      const num = Number(e.target.value)
                      return isNaN(num) ? null : setValues({...values, CVC: e.target.value.replaceAll(' ', '')})
                    }}
                  />
                  {errors.CVC && touched.CVC && <div>{errors.CVC}</div>}
                </div>
              </div>
              <button type='submit' className='coupon__signin' disabled={!(isValid && dirty)}>Take coupon</button>
            </Form>
          )}
        </Formik> 
      </div>
    </main>
  )
}