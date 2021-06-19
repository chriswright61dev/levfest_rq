import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import svglogo from "../../images/levfestlogo.svg";
function Header({ title, dates }) {
  return (
    <header>
      <HeaderLogo logosource={svglogo} />
      <div className="header_text">
        <h3> {title}</h3>
        <p>{dates}</p>
      </div>
    </header>
  );
}

export default Header;
