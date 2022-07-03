import React from "react";
import { Link } from "react-router-dom";

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
          <li className="logo">
            <Link to="/">
              <BiMoviePlay />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiHome style={icon} />
              <span>Inicio</span>
            </Link>
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
            <a href="#films">
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
        <div className="profile">
          <span>Perfil</span>
          <img
            src="https://www.looper.com/img/gallery/ways-marvel-lied-to-you-about-moon-knight/l-intro-1648736713.jpg"
            alt="avatar"
          />
        </div>
      </nav>
    </header>
  );
}
