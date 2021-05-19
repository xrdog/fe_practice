import { Button } from "antd";
import React, { FC } from "react";
import Tick from "./tick/index";
const CssComponents: FC = () => {
  console.log("this is CssComponents");
  const onClick = () => {
    const tick = (document.getElementById("tick")! as unknown) as SVGAElement;
    tick.classList.remove("tick-animation");
    tick.classList.add("tick-animation");
    const circle = (document.getElementById(
      "circle"
    )! as unknown) as SVGAElement;
    circle.classList.remove("circle-animation");
    circle.classList.add("circle-animation");
    const title = (document.getElementById("title")! as unknown) as SVGAElement;
    title.classList.remove("title-animation");
    title.classList.add("title-animation");
  };

  return (
    <div className="page-box">
      <Tick></Tick>
      <span className="w-full inline align-center">
        <Button type="primary" onClick={onClick}>
          通过JS触发
        </Button>
      </span>
    </div>
  );
};

export default CssComponents;
