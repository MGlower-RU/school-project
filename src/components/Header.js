import { Link } from 'react-router-dom';

import Amazon from '../images/amazon_logo.svg';

export default function Header() {
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
      <Link to='signin' className='login'>
        Sign-in
      </Link>
    </header>
  )
}