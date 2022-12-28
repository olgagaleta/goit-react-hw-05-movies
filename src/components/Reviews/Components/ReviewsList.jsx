import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = data => {
  const reviews = data;
  return (
    <>
      {reviews.data && reviews.data.length ? (
        reviews.data.map(review => (
          <div key={review.id} className="reviews-box">
            <h3 className="reviewer">{review.author}</h3>
            <p className="review">{review.content}</p>
          </div>
        ))
      ) : (
        <p className="noInfo">Sorry, no reviews have been added yet</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  data: PropTypes.array,
};

export default ReviewsList;
