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
  // const [reviews, setReviews] = useState('')

  let { id } = useParams()
  // console.log(id) theme park id 

  const getParkById = async () => {
    const response = await axios.get(`http://localhost:3001/api/themeParks/${id}`)
    // console.log(response.data.themePark)
    setPark(response.data.themePark)
  }

  useEffect(() => {
    getParkById()
  }, [id])
  // console.log(park) //pass test
  // console.log(park.review)

  const handleReviewChange = (evt) => {
    setReview({ ...review, [evt.target.id]: evt.target.value })
  }

  const handleReviewSubmit = async (evt) => {
    evt.preventDefault()
    await axios.post(`http://localhost:3001/api/themePark/${id}/review`, review)
    setReview(initialState)
    getParkById()
  }

  
  
  
  return park ? (
    <div className='container'>
      <div className='details'>
        <h1>{park.name}</h1>
        <h3>{park.location}</h3>
        <img alt='park img' src={park.image} />
        <p>Description: {park.description}</p>
        <h5>Price: {park.price}</h5>
       <h3>Reviews</h3>
       <section>
        {park.review.map((rev) => 
          <p>{rev.comment}</p>
         )}
          <ReviewForm
            handleSubmit={handleReviewSubmit}
            handleChange={handleReviewChange}
            review={review}
          />
         
       </section>
      </div>
    </div>
  ) : null
}

export default ParkDetails