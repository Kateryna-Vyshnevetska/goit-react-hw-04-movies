import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../components/requests";
import CastItem from "./CastItem";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getMovieCast(Number(id));
      data.length > 0 ? setCast([...data]) : setError(!error);
    })();
  }, []);

  return (
    <>
      <ul className="castList">
        {error ? (
          <h2 className="error">Cast is absent</h2>
        ) : (
          cast.map((el) => <CastItem key={el.id} {...el} />)
        )}
      </ul>
    </>
  );
};

export default Cast;
