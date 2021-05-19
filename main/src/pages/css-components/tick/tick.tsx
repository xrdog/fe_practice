import React, { CSSProperties } from "react";
import "./style/main.css";

const flex: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "800px",
  flexDirection: "column",
};

export const tick = (
  <div style={flex}>
    <input type="checkbox" className="mb16"></input>
    <svg width="400" height="400">
      <circle
        fill="none"
        stroke="#68E534"
        strokeWidth="20"
        cx="200"
        cy="200"
        r="190"
        className="circle"
        strokeLinecap="round"
        transform="rotate(-90 200 200)"
        id="circle"
      ></circle>
      <polyline
        fill="none"
        strokeWidth="22"
        stroke="#68E534"
        points="88,214 173,284 304,138"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tick"
        id="tick"
      ></polyline>
    </svg>
    <h1
      style={{ marginTop: "15px", fontSize: "40px" }}
      id="title"
      className="title"
    >
      ~~~Success~~~
    </h1>
  </div>
);
