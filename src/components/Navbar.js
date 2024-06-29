import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <a href="/dailies"> Dailies </a>
      </div>
      <div>
        <button> + </button>
      </div>
      <div>
        <a href="/todos"> To Do's </a>
      </div>
    </div>
  );
}

export default Navbar;
