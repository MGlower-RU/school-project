import { useState, createContext, useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import CouponContextComponent from './components/CouponContextComponent'

import Footer from './components/Footer'
import Header from './components/Header'
import Routing from './components/Routing'

import './styles/App.scss'

export const LoginContext = createContext();

function App() {
  const initialValue = localStorage.getItem('login') !== null ? localStorage.getItem('login') : 'false';
  const [isUser, setIsUser] = useState(initialValue)
  const [couponPrice, useCouponPrice] = useState(0)

  useEffect(() => {
    localStorage.setItem('login', isUser)
  }, [isUser])

  return (
    <Router>
      <LoginContext.Provider value={{isLogged: isUser, setLogin: setIsUser}}>
        <Header />
        <CouponContextComponent value={{price: couponPrice, setPrice: useCouponPrice}}>
          <Routing />
        </CouponContextComponent>
        <Footer />
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
