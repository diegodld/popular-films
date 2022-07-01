import React from "react";
import { useParams } from "react-router-dom";
import { baseImgOriginalUrl, baseUrl, apiKey } from "../../../utils/ApiUrl";
import "./details.css";

export default function Details() {
  const { id } = useParams();
  const [film, setfilm] = React.useState();

  React.useEffect(() => {
    if (id) {
      fetch(`${baseUrl}${id}?api_key=${apiKey}&language=pt-BR`)
        .then((response) => response.json())
        .then((data) => setfilm(data));
    }
  }, []);

  if (!film) return null;
  console.log(film);
  return (
    <div className="poster">
      <div className="background-image">
        <img
          src={`${baseImgOriginalUrl + film.backdrop_path}`}
          alt={film.title}
        />
        <div className="details">
          <h1>{film.title}</h1>
          <span>{film.overview}</span>
          <section>
            <h1>Genero</h1>
            {film["genres"].map((fil) => (
              <span>{fil.name}, </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
