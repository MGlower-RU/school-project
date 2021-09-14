import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Gift from '../images/amazon_coupon.png';
import { CouponContext } from './CouponContextComponent';

export default function Coupon() {
  const { setPrice } = useContext(CouponContext)

  const initialValue = (localStorage.getItem('couponRemains')) !== null ? localStorage.getItem('couponRemains') : 2736;
  const [couponValue, setCouponValue] = useState(initialValue)
  const couponsArray = [
    {
      id: 142,
      img: Gift,
      description: 'Hope you enjoy this Amazon Gift Card!',
      oldPrice: 25,
      newPrice: 0
    },
    {
      id: 76,
      img: Gift,
      description: 'Hope you enjoy this Amazon Gift Card!',
      oldPrice: 50,
      newPrice: 10
    },
    {
      id: 23,
      img: Gift,
      description: 'Hope you enjoy this Amazon Gift Card!',
      oldPrice: 100,
      newPrice: 25
    },
  ]
  
  useEffect(() => {
    const couponInterval = setInterval(() => {
      clearTimeout(couponInterval)
      if(couponValue <= 10) {
        setCouponValue(2736)
      } else {
        setCouponValue(c => c-(Math.floor(Math.random()*4 + 1)))
      }
    }, 10000 * Math.random() + 1000);
    localStorage.setItem('couponRemains', couponValue)
  }, [couponValue])

  return (
    <main>
      <div className="giveaway-info">
        <h1>Only {couponValue} FREE coupons left</h1>
      </div>
      <div className="coupons">
        {couponsArray.map(el => {
          return (
            <div key={el.id} className="coupon">
              <div className="coupon__img">
                <img src={el.img} alt="" />
              </div>
              <div className="coupon__description">
                {el.description}
              </div>
              <div className="coupon__info">
                <div className="coupon__price">
                  <div className="coupon__price__value">
                    <s>${el.oldPrice}.00</s>
                    <span> ${el.newPrice}.00</span>
                  </div>
                  <div className="coupon__price__company">
                    Amazon.com Gift Card
                  </div>
                </div>
                <Link to='signin' className="coupon__signin" onClick={() => setPrice(el.newPrice)}>
                  Signin to get coupon
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}