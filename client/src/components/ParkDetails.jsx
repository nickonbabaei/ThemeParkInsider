import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

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
  // console.log(park) //pass test

  // const deleteReview = async () => {
  //   const response = await axios.delete(`http://localhost:3001/api/deleteReview/${}`)
  // }
  
  return park ? (
    <div className='container'>
      <div className='details'>
        <h1>{park.name}</h1>
      </div>
    </div>
  ) : null
}

export default ParkDetails