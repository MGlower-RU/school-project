import React, { createContext } from 'react';

export const CouponContext = createContext();

export default function CouponContextComponent(props) {
  return (
    <CouponContext.Provider value={props.value}>
      {props.children}
    </CouponContext.Provider>
  )
}