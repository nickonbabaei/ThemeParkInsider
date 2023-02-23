import { useState } from "react"
// import axios from "axios"
// import { useNavigate, useParams } from "react-router-dom"

const ReviewForm = ({handleChange, handleSubmit, review}) => {

//   const initialState = {
//     comment: '',
//     rating: ''
//   }

//   const [review, setReview] = useState(initialState)

//   const handleReviewChange = (evt) => {
//     setReview({ ...review, [evt.target.id]: evt.target.value })
//   }

  
  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>

        <label htmlFor="comment"></label>
        <input
          id="comment"
          cols="30"
          rows="10"
          placeholder="Comment"
          onChange={handleChange}
          value={review.comment}
        ></input>

        <label htmlFor="rating"></label>
        <input
          type="text"
          id="rating"
          placeholder="Rating (out of 5)"
          onChange={handleChange}
          value={review.rating}
        />

        <button type="submit">Post</button>
      </form>

    </div>
  )
}

export default ReviewForm