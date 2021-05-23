import { Button } from "antd";
import React, { FC } from "react";
import { tick } from "./tick";
const Tick: FC = () => {
  const onClick = () => {
    const tick = (document.getElementById("tick")! as unknown) as SVGAElement;
    tick.classList.remove("tick-animation");
    const circle = (document.getElementById(
      "circle"
    )! as unknown) as SVGAElement;
    circle.classList.remove("circle-animation");
    const title = (document.getElementById("title")! as unknown) as SVGAElement;
    title.classList.remove("title-animation");
    setTimeout(() => {
      title.classList.add("title-animation");
      circle.classList.add("circle-animation");
      tick.classList.add("tick-animation");
    }, 0);
  };
  console.log("this is Tick");
  return (
    <>
      <span className="w-full inline align-center">
        {tick}
        <Button type="primary" onClick={onClick}>
          通过JS触发
        </Button>
      </span>
    </>
  );
};

export default Tick;
