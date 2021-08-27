import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/Filter";
import maListeFilms from "./listeFilms.json";
import { MovieList } from "./components/MovieList";
import { useState } from "react";
function App() {
  const [filmchoisis, setfilmchoisis] = useState(maListeFilms);

  return (
    <div className="App">
      <Filter
        filmchoisis={filmchoisis}
        setfilmchoisis={setfilmchoisis}
      ></Filter>
      <MovieList Films={filmchoisis}></MovieList>
    </div>
  );
}

export default App;
