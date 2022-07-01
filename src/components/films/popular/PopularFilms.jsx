import React from "react";
import FilmList from "../../list/FilmList";
import { popularUrl, baseImgUrl } from "../../../utils/ApiUrl";
import "./style.css";

export default function popularFilms() {
  const [films, setFilms] = React.useState();

  React.useEffect(() => {
    fetch(popularUrl)
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, []);

  if (!films) return null;

  return (
    <>
      <h1 style={{ color: "white" }}>Filmes Populares</h1>
      <div className="films-container">
        {films["results"].map((film) => (
          <FilmList
            key={film.id}
            title={film.title}
            description={film.overview}
            image={`${baseImgUrl + film.poster_path}`}
          />
        ))}
      </div>
    </>
  );
}
