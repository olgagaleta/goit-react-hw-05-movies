import { getReviews } from 'api/api';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'components/Loader/Loader';
import ReviewsList from './Components/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();

  const reviewsContainer = useRef();

  useEffect(() => {
    setLoading(true);
    getReviews(id)
      .then(data => setReviews(data))
      .catch(error => console.log('Error: ' + error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          reviewsContainer.current.scrollIntoView({ behavior: 'smoth' });
        }, 400);
      });
  }, [id]);

  return (
    <div ref={reviewsContainer}>
      {isLoading ? <Spinner /> : <ReviewsList data={reviews} />}
    </div>
  );
};

export default Reviews;
