import React from "react";
import Slider from "../../components/slider/Slider";
import PopularFilms from "../../components/films/popular/PopularFilms";

export default function Home() {
  React.useEffect(() => {
    document.title = "Filmes Populares";
  }, []);

  return (
    <>
      <Slider />
      <PopularFilms />
    </>
  );
}
