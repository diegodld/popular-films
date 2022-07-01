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
import avatar from "../../img/avatar.jpg";
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
        <div className="profile">
          <span>Perfil</span>
          <img src= "../../img/avatar.jpg" alt="avatar" />
        </div>
      </nav>
    </header>
  );
}
