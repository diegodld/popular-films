import React from "react";
import {
  BiMoviePlay,
  BiHome,
  BiSearch,
  BiPlus,
  BiFilm,
  BiTv,
} from "react-icons/bi";
import "./header.css";

export default function Header() {
  const [scroll, setScroll] = React.useState(0);

  window.addEventListener("scroll", function (ev) {
    setScroll(this.scrollY);
  });

  const icon = { color: "white", marginRight: "0.5rem" };
  return (
    <header className={`${scroll > 0 ? "header scroll" : "header"}`}>
      <nav>
        <ul className="header-ul">
          <BiMoviePlay
            size={30}
            style={{ color: "white", marginLeft: "1rem" }}
          />
          <li>
            <a href="#">
              <BiHome style={icon} />
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiSearch style={icon} />
              <span>Pesquisa</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiPlus style={icon} />
              <span>Minha Lista</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiFilm style={icon} />
              <span>Filmes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiTv style={icon} />
              <span>Séries</span>
            </a>
          </li>
        </ul>

        <span className="profile">Perfil</span>
      </nav>
    </header>
  );
}
