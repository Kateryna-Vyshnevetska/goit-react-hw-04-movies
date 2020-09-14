import React, { useEffect, useState } from "react";
import { getMovieReview } from "../../components/requests";
import ReviewsItem from "./ReviewsItem";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await getMovieReview(Number(id));
      data.length > 0 ? setReviews([...data]) : setError(!error);
    })();
  }, []);

  return (
    <>
      <ul className="reviewsList">
        {error ? (
          <h2 className="error">Reviews is absent</h2>
        ) : (
          reviews.map((el) => <ReviewsItem key={el.id} {...el} />)
        )}
      </ul>
    </>
  );
};

export default Reviews;
