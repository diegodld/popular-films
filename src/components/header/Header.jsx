import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <nav>
          <ul className="header-ul">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Pesquisa</a>
            </li>
            <li>
              <a>Minha Lista</a>
            </li>
            <li>
              <a>Filmes</a>
            </li>
            <li>
              <a>Séries</a>
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
