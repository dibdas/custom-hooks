import React from "react";
import { useState } from "react";
import useInterval from "../hooks/useInterval";

function UseInterval() {
  const [count, setCount] = useState(0);
  const interval = useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return <div>time is {count}</div>;
}

export default UseInterval;
