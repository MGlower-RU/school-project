import { Switch, Route } from "react-router-dom";

import Coupon from './Coupon'

export default function Routing() {
  return (
    <Switch>
      <Route path="/signin">
        <h1>Signin page</h1>
      </Route>
      <Route path="/">
        <Coupon />
      </Route>
    </Switch>
  )
}