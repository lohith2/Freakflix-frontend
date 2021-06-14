import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/drama")}
          className="nav-link"
          to="/drama"
        >
          Drama
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/comedy")}
          className="nav-link"
          to="/comedy"
        >
          Comedy
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/animation")}
          className="nav-link"
          to="/animation"
        >
          Animation
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/action")}
          className="nav-link"
          to="/action"
        >
          Action
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/adventure")}
          className="nav-link"
          to="/adventure"
        >
          Adventure
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/biography")}
          className="nav-link"
          to="/biography"
        >
          Biography
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
