import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router";

import Mastercard from '../images/mastercard.svg'
import Visa from '../images/visa.svg'

export default function Payment() {
  const history = useHistory()
  const date = new Date();
  const convertNumber = num => num >= 10 ? num : `0${num}`
  const currentDate = `${date.getFullYear()}-${convertNumber(date.getMonth()+1)}`;
  const [dateValue, setDateValue] = useState(currentDate);
  
  function validateNumber(value) {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!value) {
      error = "*Required";
    } else if (value.length < 8) {
      error = "*Password must be 8 characters long.";
    } else if (value.length > 30) {
      error = "*Password must be less 30 characters long.";
    } else if (!passwordRegex.test(value)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
  };

  function cvcValidate(value) {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!value) {
      error = "*Required";
    } else if (value.length < 3) {
      error = "*CVC must be 3 characters long.";
    }
    return error;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target.closest('form'))
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
          {({errors, touched, isValid, dirty}) => (
            <Form
              className='card__form'
              name="card"
              method="post"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Field type="hidden" name="form-name" value="card" />
              <div className="card__front">
                <Field id='holder' placeholder='Card holder' name="holder" type="text" />
                <Field id='number' placeholder='Card number' name="number" type="text" validate={validateNumber} />
                {errors.number && touched.number && <div>{errors.number}</div>}
                <div className="card__front__bottom">
                  <Field id='month' placeholder='MM' name="month" type="text" maxLength="2" />
                  <Field id='year' placeholder='YY' name="year" type="text" maxLength="2" />
                </div>
                <div className="card__available-methods">
                  <img src={Mastercard} alt="" />
                  <img src={Visa} alt="" />
                </div>
              </div>
              <div className="card__back">
                {/* Make validate on number length and only numbers */}
                <Field
                  id='CVC'
                  placeholder='CVC'
                  name="CVC"
                  maxLength="3"
                  type="text"
                  // onChange={cvcInput}
                  validate={cvcValidate}
                />
              </div>
              <button type='submit' className='coupon__signin' disabled={!(isValid && dirty)}>Take coupon</button>
            </Form>
          )}
        </Formik> 
      </div>
    </main>
  )
}