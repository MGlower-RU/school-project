import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginContext } from "../App";

import Coupons from './Coupons'
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
        {isLogged === 'true' ? <Payment /> : <Redirect to="/" />}
      </Route>
      <Route path="/coupons">
        <Coupons />
      </Route>
      <Route path="/">
        <Redirect to="/coupons" />
      </Route>
    </Switch>
  )
}