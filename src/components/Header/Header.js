import { useQuery } from "react-query";

import { fetchFestivalData } from "../../utilities/fetchData/FetchData";
import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import svglogo from "../../images/levfestlogo.svg";
function Header() {
  let festival;
  const { data } = useQuery("FestivalData", fetchFestivalData);
  data ? (festival = data[0]) : (festival = {});

  return (
    <header>
      <HeaderLogo logosource={svglogo} />
      <div className="header_text">
        <h3> {festival ? festival.festival_title : null}</h3>
        <p>{festival ? festival.festival_dates : null}</p>
      </div>
    </header>
  );
}

export default Header;
