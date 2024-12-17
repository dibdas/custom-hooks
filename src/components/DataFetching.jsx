import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //       setTodos(res.data.todos);
  //     });
  //   }, []);
  const { todos, loading } = usetodos();
  if (loading) {
    return <>loading....</>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}
function usetodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // user wont see anything for 5 seconds,
    // runs after every 5 seconds
    const value = setInterval(() => {
      //   axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      //   setTodos(res.data.todos);
      console.log("new 5 ");
      setloading(false);
      //   });
    }, n * 10000);
    //   runs once atleast
    //   axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
    //   setTodos(res.data.todos);
    console.log("new");

    setloading(false);
    //   });
    return () => {
      // whenever the n changes setinterval will run
      //   clear the original clock i.e previous n i.e the
      //   clock that was running should be stopped , and then
      //    the new clock , and start the new clock
      // it si stop the old clock i.e the old dependency , and
      //    start the new clock i.e new dependency
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default DataFetching;
