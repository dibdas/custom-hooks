import React, { useEffect } from "react";
import { useState } from "react";

function useDebounce(value, timer) {
  const [debousedvalue, setDeboundedvalue] = useState("");
  useEffect(() => {
    let timeout = setInterval(() => {
      setDeboundedvalue(value);
    }, timer);
    return () => {
      clearInterval(timeout);
    };
  }, [value]);
  return debousedvalue;
}

export default useDebounce;
// Keep deleting the old clock , keep updating new clock
// Suppose the timer or the delay is 5000
// If the value gets updated before the 5000ms setTimeout is called again before 5000ms is over
// If before 5000ms that Anytime the value gets updated , clear the old clock , update the new clock

// The value will be updated after 5000ms of the last key strokes
// The value get updated i.e the new value is after the last key stroke
// If the value gets update very quickly first clear the old clock , and then start the new clock

// return () => {
//      clearInterval(timeout);
//    };

//  Will be called where the timeout is being cleared

// Keep deleting the old clock , updating the new clock , until
//     clearInterval(timeout);
// eout);
// Is called for 5000 ms  and then the actual value gets updated
