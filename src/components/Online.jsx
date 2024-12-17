import React, { useEffect, useState } from "react";
import useOnline from "../hooks/useOnline";
function Online() {
  const online = useOnline();
  console.log("online", online);
  return <div>{online ? "you are online yay!" : " you are offline "}</div>;
}

export default Online;
