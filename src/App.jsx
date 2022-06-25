import Header from "./components/header/Header";
import "./App.css";

function App() {
  console.log(import.meta.env.VITE_TEXT);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
