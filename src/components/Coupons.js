import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Gift from '../images/amazon_coupon.png';
import { LoginContext } from '../App';
import { CouponContext } from './CouponContextComponent';

export default function Coupons() {
  const { setPrice } = useContext(CouponContext)
  const { isLogged } = useContext(LoginContext);

  const couponsArray = [
    {
      id: 142,
      img: Gift,
      description: 'Для новых пользователей\n 1 товар до 150₽ - бесплатно',
      oldPrice: 150,
      newPrice: 0
    },
    {
      id: 76,
      img: Gift,
      description: 'Скидка 48% на товар до 500₽',
      oldPrice: 500,
      newPrice: 260
    },
    {
      id: 23,
      img: Gift,
      description: 'Скидка 55% на 2 товара до 2000₽',
      oldPrice: 2000,
      newPrice: 450
    },
  ]

  return (
    <main>
      <CouponsRemain />
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
                    <s>₽{el.oldPrice}.00</s>
                    <span> ₽{el.newPrice}.00</span>
                  </div>
                  <div className="coupon__price__company">
                    Подарочный купон amazon.com
                  </div>
                </div>
                {
                  isLogged === 'true' ?
                  <Link to='payment' className="coupon__signin" onClick={() => setPrice(el.newPrice)}>
                    Получить
                  </Link>
                  :
                  <Link to='signin' className="coupon__signin" onClick={() => setPrice(el.newPrice)}>
                    Войдите в аккаунт
                  </Link>
                }
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

function CouponsRemain() {
  const initialValue = (localStorage.getItem('couponRemains')) !== null ? localStorage.getItem('couponRemains') : 1754;
  const [couponValue, setCouponValue] = useState(initialValue)

  useEffect(() => {
    const couponInterval = setInterval(() => {
      if(couponValue <= 10) {
        setCouponValue(1754)
      } else {
        setCouponValue(c => c-(Math.floor(Math.random()*4 + 1)))
      }
    }, 10000 * Math.random() + 1000);
    localStorage.setItem('couponRemains', couponValue)

    return () => clearInterval(couponInterval)
  }, [couponValue])

  return (
    <div className="giveaway-info">
      <h1>Осталось {couponValue} БЕСПЛАТНЫХ купонов</h1>
    </div>
  )
}