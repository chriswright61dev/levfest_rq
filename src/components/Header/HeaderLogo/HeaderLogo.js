import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
function HeaderLogo({ logosource }) {
  return (
    <Link to="/">
      <div className="header_logo">
        <img src={logosource} alt="festival logo" />
      </div>
    </Link>
  );
}

export default HeaderLogo;
