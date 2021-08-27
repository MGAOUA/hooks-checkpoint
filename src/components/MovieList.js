import MovieCard from "./MovieCard";

export const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.Films.map((e) => (
          <li>
            <MovieCard film={e}></MovieCard>
          </li>
        ))}
      </ul>
    </div>
  );
};
