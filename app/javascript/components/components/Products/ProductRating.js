import React from 'react';

export default function ProductRating(props) {
  return(
    <div className='rating'>
      <p className='ratingStars'>Stars out of 5: {props.rating.stars}</p>
      <p className='ratingReview'>{props.rating.comment}</p>
    </div>
  )
}