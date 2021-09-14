import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import CouponContextComponent from './components/CouponContextComponent'

import Footer from './components/Footer'
import Header from './components/Header'
import Routing from './components/Routing'

import './styles/App.scss'

function App() {
  const [couponPrice, useCouponPrice] = useState(0)

  return (
    <Router>
        <Header />
        <CouponContextComponent value={{price: couponPrice, setPrice: useCouponPrice}}>
          <Routing />
        </CouponContextComponent>
        <Footer />
    </Router>
  );
}

export default App;
