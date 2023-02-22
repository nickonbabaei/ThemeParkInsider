import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = (props) => {

  const [park, setPark] = useState('')

  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getParksById = async () => {
      const response = await axios.get(`http://localhost:3001/api/themeParks/${id}`)
      console.log(response.data.sneaker)
    }
  })
  
  return (
    <div>ParkDetails</div>
  )
}

export default ParkDetails