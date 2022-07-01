import Header from "./components/header/Header";
import "./App.css";
import Slider from "./components/slider/Slider";
import PopularFilms from "./components/films/popular/PopularFilms";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <PopularFilms />
    </div>
  );
}

export default App;
