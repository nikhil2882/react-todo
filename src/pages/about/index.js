import React from "react";

import { useSelector, useDispatch } from "react-redux";

export default function ABout() {
  const counter = useSelector(function (state) {
    return state.counter;
  });

  return <h1>{counter}</h1>;
}
