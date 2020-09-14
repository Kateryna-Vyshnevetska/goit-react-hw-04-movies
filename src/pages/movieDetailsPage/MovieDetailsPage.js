import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { getMovieDetails } from "../../components/requests";
import { CardDetails } from "../../components/cardDetails/CardDetails";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import { Btn } from "../../components/ui/Btn";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({ genres: [] });
  const [path, setPath] = useState({});
  const params = useRouteMatch();
  const url = params.url;
  const movieId = params.params.movieId;
  const { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const data = await getMovieDetails(movieId);
      setMovie({
        poster_path: data.poster_path,
        overview: data.overview,
        original_title: data.original_title,
        popularity: data.popularity,
        genres: data.genres,
      });
    })();
    setPath({ from: state.from, query: state.query });
  }, []);

  const checkPath = () => {
    if (path.query) {
      history.push(path.from + path.query);
    } else {
      history.push(path.from);
    }
  };
  return (
    <>
      <Btn label="go back" type="button" icon="undo" handleClick={checkPath} />
      <CardDetails {...movie} />
      <div className="blockLinks">
        <Link exact to={`${url}/cast`} className="linkDetails">
          Cast
        </Link>
        <Link exact to={`${url}/reviews`} className="linkDetails">
          Reviews
        </Link>
      </div>
      <Switch>
        <Route path={`${url}/cast`} render={() => <Cast id={movieId} />} />
        <Route
          path={`${url}/reviews`}
          render={() => <Reviews id={movieId} />}
        />
      </Switch>
    </>
  );
};
export default MovieDetailsPage;
