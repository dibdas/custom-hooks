import { useEffect, useState } from "react";
import DataFetching from "./components/DataFetching";
import MyComponent from "./components/MyComponent";
import Online from "./components/Online";
import UseInterval from "./components/UseInterval";
import UseMouse from "./components/UseMouse";

function App() {
  const [count, setCount] = useState(0);
  // setCount((count) => count + 1);
  // setCount((count) => count + 1);
  // console.log(count);
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);
  return (
    <>
      {render ? <MyComponent /> : <></>}
      {/* <DataFetching /> */}
      <Online />
      <UseMouse />
      <UseInterval />
    </>
  );
}

export default App;
