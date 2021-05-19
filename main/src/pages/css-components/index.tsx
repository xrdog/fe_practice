import { Button } from "antd";
import React, { FC } from "react";
import Tick from "./tick/index";
const CssComponents: FC = () => {
  console.log("this is CssComponents");
 

  return (
    <div className="page-box">
      <Tick></Tick>
    </div>
  );
};

export default CssComponents;
