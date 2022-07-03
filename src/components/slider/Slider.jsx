import React from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseUrl, baseMediumImgUrl, apiKey } from "../../utils/ApiUrl";
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  const [films, setFilms] = React.useState();

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/popular?api_key=${apiKey}&&language=pt-BR&page=1`)
      .then((response) => setFilms(response.data));
  }, []);

  if (films) {
    return (
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {films["results"].map((film) => (
            <SwiperSlide key={film.id}>
              <img src={`${baseMediumImgUrl + film.poster_path}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
