import React from "react";
import useMousePointer from "../hooks/useMousePointer";
function UseMouse() {
  const mousePointer = useMousePointer();
  return (
    <div>
      {" "}
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </div>
  );
}

export default UseMouse;
