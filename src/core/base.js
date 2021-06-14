import React from "react";
import Menu from "./menu";

const Base = ({ title = "", description = "", children }) => (
  <div style={{ backgroundColor: "black" }}>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="hello">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className="bg-dark text-white p-4">{children}</div>
    </div>
  </div>
);

export default Base;
