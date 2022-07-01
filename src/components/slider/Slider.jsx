import React from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  const [films, setFilms] = React.useState();

  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a2464fcf451107b26c5ae7e5419a6a26&language=pt-BR&page=1"
      )
      .then((response) => setFilms(response.data));
  }, []);

  if (films) {
    return (
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {films["results"].map((film) => (
            <SwiperSlide key={film.id}>
              <img src={`${baseImgUrl + film.poster_path}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
