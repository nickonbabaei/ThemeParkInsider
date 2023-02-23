import ParkCard from "../components/ParkCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import '../styles/parkList.css'


const ParkList = () => {

    const [parks, setParks] = useState([])

    useEffect(() => {
        const getParks = async () => {
            const response = await axios.get(`http://localhost:3001/api/themeParks`)
            setParks(response.data.parks)
        }
        getParks()
    }, [])

    return (
        <div className="park-list">
            <h1 className="header">Theme Parks</h1>
            <section className="container-grid">
                {parks.map((park) => (
                    <Link to={`/themeParks/${park._id}`} >
                    <ParkCard
                        key={park._id}
                        {...park}
                        name={park.name}
                        image={park.image}
                    />
                    </Link>
                ))}
            </section>

        </div>
    )
}

export default ParkList