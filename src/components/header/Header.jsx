import React from "react";
import logo from "../../img/play.svg";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <nav>
          <img src={logo} alt="logo" width={30} />
          <ul className="header-ul">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Pesquisa</a>
            </li>
            <li>
              <a href="#">Minha Lista</a>
            </li>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
          </ul>
        </nav>
        <div>
          <span>Perfil</span>
        </div>
      </div>
    </header>
  );
}
