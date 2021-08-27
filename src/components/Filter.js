import React from "react";

import { useState } from "react";
import MovieCard from "./MovieCard";
const Filter = ({ setfilmchoisis, filmchoisis }) => {
  const [Name, setName] = useState();
  const [choix, setchoix] = useState(false);
  const filmChoisi = () => {
    if (Name) {
      if (choix == "byfilm")
        return setfilmchoisis(filmchoisis.filter((e) => e.title == Name));

      if (choix == "byrate")
        return setfilmchoisis(filmchoisis.filter((e) => e.rating == Name));
    }
    return filmchoisis;
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="choix"
          onChange={(e) => setchoix(e.target.value)}
          value="byfilm"
        ></input>
        <label>Name</label>
        <br></br>

        <input
          type="radio"
          name="choix"
          onChange={(e) => setchoix(e.target.value)}
          value="byrate"
        ></input>
        <label>Rate</label>
      </div>

      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={filmChoisi}>filtrer</button>
    </div>
  );
};

export default Filter;
