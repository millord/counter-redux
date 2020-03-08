import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./actions";

const App = () => {
  const { counter, isLogged } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to Redux! :)</h1>
      <p>{isLogged ? "The user is logged in" : "The user is not log in"}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>this is the counter: {counter}</p>
    </div>
  );
};

export default App;
