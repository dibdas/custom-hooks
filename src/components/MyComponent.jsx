import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <div>
      {" "}
      {count}
      <button onClick={() => setCount((pcount) => pcount + 1)}>click</button>
    </div>
  );
}

export default MyComponent;
