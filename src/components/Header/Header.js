import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getPage = () => {
    const path = location.pathname;
    const noSlash = path.replaceAll("/", "");
    console.log(noSlash);
    return noSlash === "" ? "About" : noSlash;
  };

  return (
    <header>
      <div className="pages">
        <h1 className="name">
          <Link to="/">Kanav Sharma</Link>
        </h1>
        <p className="page-title">{getPage()}</p>
      </div>
      <div className="nav-container">
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}
