import React from "react";

const ReviewsItem = ({ author, content }) => {
  return (
    <>
      <div>
        <h2>Author: {author}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};
export default ReviewsItem;
