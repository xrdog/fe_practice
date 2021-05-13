import React, { CSSProperties } from "react";

const flex: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  flexDirection: "column",
};

export const tick = (
  <div style={flex}>
    <svg width="400" height="400">
      <circle
        fill="none"
        stroke="#68E534"
        strokeWidth="20"
        cx="200"
        cy="200"
        r="185"
      ></circle>
      <polyline
        fill="none"
        strokeWidth="22"
        stroke="#68E534"
        points="88,214 173,284 304,138"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></polyline>
    </svg>
    <h1 style={{marginTop:'15px'}}> ~~~Success~~~</h1>
  </div>
);
