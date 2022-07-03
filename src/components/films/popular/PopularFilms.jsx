import React from "react";
import FilmList from "../../list/FilmList";
import { apiKey, baseImgUrl, baseUrl } from "../../../utils/ApiUrl";
import "./style.css";

export default function popularFilms() {
  const [films, setFilms] = React.useState();
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetch(`${baseUrl}popular?api_key=${apiKey}&language=pt-BR&page=${page}`)
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, [page]);

  if (!films) return null;

  return (
    <>
      <h1 style={{ color: "white" }}>Filmes Populares</h1>
      <div className="films-container" id="films">
        {films["results"].map((film) => (
          <FilmList
            key={film.id}
            id={film.id}
            title={film.title}
            image={`${baseImgUrl + film.poster_path}`}
          />
        ))}
      </div>
      <div className="pagination">
        <p style={{ color: "white" }}>Página {page}</p>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Próximo
        </button>
      </div>
    </>
  );
}
