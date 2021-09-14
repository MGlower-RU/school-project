import { Switch, Route } from "react-router-dom";

import Coupon from './Coupon'
import Login from "./Login";
import Payment from "./Payment";

export default function Routing() {
  return (
    <Switch>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/">
        <Coupon />
      </Route>
    </Switch>
  )
}