import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="headercontainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7d/Leboncoin.fr_Logo_2016.svg/1280px-Leboncoin.fr_Logo_2016.svg.png"
        alt="new"
      />
      <button>Deposer une annonce</button>
      <input type="text" placeholder="Rechercher"></input>
    </div>
  );
}

export default Header;
