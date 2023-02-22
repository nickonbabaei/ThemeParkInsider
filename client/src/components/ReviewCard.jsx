import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='container'>
      <p>Comment: {props.comment}</p>
      <p>Rating: {props.rating}</p>
    </div>
  )
}

export default ReviewCard