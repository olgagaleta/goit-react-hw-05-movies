import React from 'react';
import PropTypes from 'prop-types';

const CastList = data => {
  const cast = data;

  return (
    <ul className="cast-list">
      {cast.data && cast.data.length ? (
        cast.data.map(cast => (
          <li key={cast.id} className="cast-item">
            {/* {cast.profile_path === null ? (
              <img src={noImg} alt={cast.name} width="150" />
            ) : (
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />
            )} */}
            <p className="name">{cast.name}</p>
            <p className="character">Character: {cast.character}</p>
          </li>
        ))
      ) : (
        <li key="noInfo" className="noInfo">
          Sorry, no cast has been added yet
        </li>
      )}
    </ul>
  );
};

CastList.propTypes = {
  data: PropTypes.array,
};

export default CastList;
