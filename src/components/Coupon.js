import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gift from '../images/amazon_coupon.png';

export default function Coupon() {
  const initialValue = !isNaN(localStorage.getItem('couponRemains')) ? localStorage.getItem('couponRemains') : 2736
  const [couponValue, setCouponValue] = useState(initialValue)
  
  useEffect(() => {
    const couponInterval = setInterval(() => {
      clearTimeout(couponInterval)
      setCouponValue(c => c-(Math.floor(Math.random()*4 + 1)))
    }, 10000 * Math.random() + 1000);
  }, [couponValue])

  useEffect(() => {
    localStorage.setItem('couponRemains', couponValue)
  }, [couponValue])

  return (
    <main>
      <div className="giveaway-info">
        <h1>Only {couponValue} FREE coupons left</h1>
      </div>
      <div className="coupons">
        <div className="coupon">
          <div className="coupon__img">
            <img src={Gift} alt="" />
          </div>
          <div className="coupon__description">
            Hope you enjoy this Amazon Gift Card!
          </div>
          <div className="coupon__info">
            <div className="coupon__price">
              <div className="coupon__price__value">
                <s>$25.00</s>
                <span> $0.00</span>
              </div>
              <div className="coupon__price__company">
                Amazon.com Gift Card
              </div>
            </div>
            <Link to='signin' className="coupon__signin">
              Signin to get coupon
            </Link>
          </div>
        </div>
        <div className="coupon">
          <div className="coupon__img">
            <img src={Gift} alt="" />
          </div>
          <div className="coupon__description">
            Hope you enjoy this Amazon Gift Card!
          </div>
          <div className="coupon__info">
            <div className="coupon__price">
              <div className="coupon__price__value">
                <s>$50.00</s>
                <span> $10.00</span>
              </div>
              <div className="coupon__price__company">
                Amazon.com Gift Card
              </div>
            </div>
            <Link to='signin' className="coupon__signin">
              Signin to get coupon
            </Link>
          </div>
        </div>
        <div className="coupon">
          <div className="coupon__img">
            <img src={Gift} alt="" />
          </div>
          <div className="coupon__description">
            Hope you enjoy this Amazon Gift Card!
          </div>
          <div className="coupon__info">
            <div className="coupon__price">
              <div className="coupon__price__value">
                <s>$100.00</s>
                <span> $25.00</span>
              </div>
              <div className="coupon__price__company">
                Amazon.com Gift Card
              </div>
            </div>
            <Link to='signin' className="coupon__signin">
              Signin to get coupon
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}