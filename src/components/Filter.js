import React from "react";

import { useState } from "react";
import MovieCard from "./MovieCard";
const Filter = ({ setfilmchoisis, filmchoisis }) => {
  const [Name, setName] = useState();

  const filmChoisi = () =>
    setfilmchoisis(filmchoisis.filter((e) => e.title == Name));

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={filmChoisi}>filtrer</button>
    </div>
  );
};

export default Filter;
