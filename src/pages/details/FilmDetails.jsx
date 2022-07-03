import React from "react";
import { useParams } from "react-router-dom";
import { baseLargeImgUrl, baseUrl, apiKey } from "../../utils/ApiUrl";
import { dateFormat } from "../../utils/date";
import { timeFormat } from "../../utils/timer";
import "./details.css";

export default function FilmDetails() {
  const { id } = useParams();
  const [film, setfilm] = React.useState();

  React.useEffect(() => {
    if (id) {
      fetch(`${baseUrl}/${id}?api_key=${apiKey}&language=pt-BR`)
        .then((response) => response.json())
        .then((data) => setfilm(data))
        .catch((error) => alert(error));
    }
  }, []);

  if (!film) return null;
  document.title = `${film.title}`;

  return (
    <div className="poster-container">
      <div className="poster">
        <div className="background-image">
          <img
            src={`${baseLargeImgUrl + film.backdrop_path}`}
            alt={film.title}
          />
        </div>

        <div className="details-container">
          <h1>{film.title}</h1>
          <span>{film.overview}</span>
          <section>
            <h1>Detalhes</h1>
            <p>
              <strong>Gênero: </strong>
              <span>
                {film["genres"]
                  .map((fil) => {
                    {
                      return fil.name;
                    }
                  })
                  .join(", ")}
                .
              </span>
            </p>
            <p>
              <strong>Data de lançamento: </strong>
              {dateFormat(film.release_date)}.
            </p>
            <p>
              <strong>Título original: </strong>
              {film.original_title}.
            </p>
            <p>
              <strong>Duração: </strong>
              {timeFormat(film.runtime)}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
