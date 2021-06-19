// import React from "react";
import "./EmailLink.css";
function EmailLink(props) {
  const link = "mailto:" + props.source;
  const linkText = props.linkText;
  return (
    <p className="email_link">
      <a href={link}>Email: {linkText}</a>
    </p>
  );
}

export default EmailLink;
