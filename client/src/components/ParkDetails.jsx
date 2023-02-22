import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from './ReviewCard'

const ParkDetails = (props) => {

  const [park, setPark] = useState('')

  let { id } = useParams()
  // console.log(id) theme park id 

  useEffect(() => {
    const getParkById = async () => {
      const response = await axios.get(`http://localhost:3001/api/themeParks/${id}`)
      // console.log(response.data.themePark)
      setPark(response.data.themePark)
    }
    getParkById()
  }, [id])
  console.log(park) //pass test
  console.log(park.reviews)

  // const deleteReview = async () => {
  //   const response = await axios.delete(`http://localhost:3001/api/deleteReview/${}`)
  // }
  
  return park ? (
    <div className='container'>
      <div className='details'>
        <h1>{park.name}</h1>
        <h3>{park.location}</h3>
        <img alt='park img' src={park.image} />
        <p>Description: {park.description}</p>
        <h5>Price: {park.price}</h5>
       
      </div>
    </div>
  ) : null
}

export default ParkDetails