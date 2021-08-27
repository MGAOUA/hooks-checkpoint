import React from "react";

const MovieCard = ({ film }) => {
  return (
    <div>
      <img src={film.posterURL} alt="photo film" />
      <p>{`Titre:  ${film.title}`}</p>
      <p>{`Rate:  ${film.rating}`}</p>
    </div>
  );
};

export default MovieCard;
