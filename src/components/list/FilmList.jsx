import React from "react";
import { Link } from "react-router-dom";
import "./list.css";

export default function FilmList({ title, image, id }) {
  return (
    <div className="items">
      <Link to={`/movie/${id}`}>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="info">
          <h4 style={{ color: "white" }}>{title}</h4>
        </div>
      </Link>
    </div>
  );
}
