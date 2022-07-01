import Header from "./components/header/Header";
import "./App.css";
import Slider from "./components/slider/Slider";
import PopularFilms from "./components/films/popular/PopularFilms";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <PopularFilms />
      <Footer />
    </div>
  );
}

export default App;
