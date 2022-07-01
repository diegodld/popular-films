const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const baseImgOriginalUrl = "https://image.tmdb.org/t/p/original";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=a2464fcf451107b26c5ae7e5419a6a26&language=pt-BR&page=1";

const baseUrl = "https://api.themoviedb.org/3/movie/";

const apiKey = import.meta.env.VITE_API_SECRET;

export { baseImgUrl, popularUrl, baseUrl, apiKey, baseImgOriginalUrl };
