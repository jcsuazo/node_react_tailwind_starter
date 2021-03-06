import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        style={{ color }}
        className={
          value >= i + 1
            ? 'fas fa-star'
            : value >= i + 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
        key={i}
      ></i>,
    );
  }
  return (
    <div className='rating'>
      {stars.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: '#f8e825',
};
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
