import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LoginContext } from "../App";

import Amazon from '../images/amazon_logo.svg';

export default function Header() {
  const history = useLocation().pathname.slice(1);
  const { isLogged, setLogin } = useContext(LoginContext)

  return (
    <header>
      <a
        href='https://www.amazon.com/'
        target='_blank'
        rel='noreferrer'
        className="logo"
      >
        <img src={Amazon} alt="Amazon" />
      </a>
      {history === 'signin' ? null :
        isLogged === 'true' ?
        <Link to='/' className='login' onClick={() => setLogin('false')}>
          Logout
        </Link>
        :
        <Link to='signin' className='login'>
          Sign-in
        </Link>
      }
    </header>
  )
}