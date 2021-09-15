import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginContext } from "../App";

import Coupon from './Coupon'
import Login from "./Login";
import Payment from "./Payment";

export default function Routing() {
  const { isLogged } = useContext(LoginContext)

  return (
    <Switch>
      <Route path="/signin">
        {isLogged === 'true' ? <Redirect to="/" /> : <Login />}
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