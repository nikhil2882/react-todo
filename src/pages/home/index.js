import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../../App";

import img from "../../random.jpg";

export default function Home() {
  const dispatch = useDispatch();

  const [d1, setD1] = useMyHook();

  const [a, seta] = useState([1, 23, 4, 5, 6]);

  const counter = useSelector(function (state) {
    return state.counter;
  });

  function onInc() {
    dispatch({ type: "INC" });
  }

  function onDec() {
    dispatch({ type: "DEC" });
    setD1(d1 * 2);
  }

  function onDec10() {
    dispatch({ type: "DECBY10", payload: counter + 10 });
  }

  function onchange(index) {
    return function () {
      a.splice(index, 1);
      seta([...a]);
    };
  }

  return (
    <>
      <h1>{counter}</h1>
      <h1>{d1}</h1>
      <button onClick={onchange("INC")}>Inc</button>
      <button onClick={onchange("DEC")}>Dec</button>
      <button onClick={onDec}>Dec</button>
      <img src={img} />
      <ul>
        {a.map(function (data, index) {
          return <button onClick={onchange(index)}>{data}</button>;
        })}
      </ul>
    </>
  );
}

function useMyHook() {
  const [counter, setCounter] = useState(100);

  useEffect(function () {
    setTimeout(function () {
      setCounter(500);
    }, 2000);
  }, []);

  return [counter, setCounter];
}
