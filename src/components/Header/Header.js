import { useState } from "react";
import { useLocation } from "react-router-dom";
import FilterToDo from "./FilterToDo";
import FilterDailies from "./FilterDailies";
import "./Header.scss";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="header">
      <span className="header__user">
        <img
          src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1719698636~exp=1719702236~hmac=9510a793ba0bb319a8e606156e675d8c6d23083c02b3496fa94521d4c250becd&w=900"
          alt="user"
          className="header__user-pic"
        />
        <p className="header__user-name">user's name</p>
      </span>
      <span className="header__nav">
        <input
          type="search"
          value={searchInput}
          onChange={handleChange}
          placeholder="&#x1F50E; Search ..."
          className="header__nav-search"
        />
        {location.pathname === "/dailies" ? <FilterDailies /> : <FilterToDo />}
        <button className="header__nav-settings">Settings</button>
      </span>
    </div>
  );
};

export default Header;
