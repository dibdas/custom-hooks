import React from "react";
import { useEffect, useState } from "react";

function useInterval(fn, timeout) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      fn();
    }, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [fn, timeout]);

  return count;
}
export default useInterval;
