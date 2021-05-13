import React, { FC } from "react";
import { tick } from "./tick";
const Tick: FC = () => {
  console.log("this is Tick");
  return <>{tick}</>;
};

export default Tick;
