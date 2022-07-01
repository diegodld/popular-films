import React from "react";
import "./list.css";

export default function FilmList({ title, description, image }) {
  return (
    <div className="items">
      <a href="google.com">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="info">
          <h4 style={{ color: "white" }}>{title}</h4>
        </div>
      </a>
    </div>
  );
}
