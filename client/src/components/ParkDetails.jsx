import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReviewForm from './ReviewForm'

const ParkDetails = (props) => {

  const initialState = {
    comment: '',
    rating: ''
  }

  const [review, setReview] = useState(initialState)
  const [park, setPark] = useState('')

  let { id } = useParams()

  const getParkById = async () => {
    const response = await axios.get(`/api/themeParks/${id}`)
    setPark(response.data.themePark)
  }

  useEffect(() => {
    getParkById()
  }, [id])

  const handleReviewChange = (evt) => {
    setReview({ ...review, [evt.target.id]: evt.target.value })
  }

  const handleReviewSubmit = async (evt) => {
    evt.preventDefault()
    await axios.post(`/api/themePark/${id}/review`, review)
    setReview(initialState)
    getParkById()
  }

  const handleReviewDelete = async (reviewId) => {
    await axios.delete(`/api/deleteReview/${reviewId}`)
    getParkById()
  }

  return park ? (
    <div className='details-container'>
      <div className='details'>
        <h1 className='parkName'>{park.name}</h1>
        <h3 className='location'>{park.location}</h3>
        <img className="park-img" alt='park img' src={park.image} />
        <div></div>
        <p className='description'>Description: {park.description}</p>
        <h5 className='price'>Price: {park.price}</h5>
        <div className='review-container'>
          <h3 className='review-title'>Reviews</h3>
          <section>
          <div className='reviews'>
            {park.review.map((rev) => 
              <div className='all-reviews'>
                <p><span>Review: </span>{rev.comment} <span> <br />Rating: </span> {rev.rating} <button className='delete-button' onClick={() => handleReviewDelete(rev._id)}>x</button></p>
              </div>
              
            )}
          </div>
              <ReviewForm
                handleSubmit={handleReviewSubmit}
                handleChange={handleReviewChange}
                review={review}
              />
          
          </section>
       </div>
      </div>
    </div>
  ) : null
}

export default ParkDetails