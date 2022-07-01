import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import Details from "./components/films/details/Details";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
