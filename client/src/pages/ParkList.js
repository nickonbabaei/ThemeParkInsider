import ParkCard from "../components/ParkCard"
import { useState, useEffect } from "react"
import axios from 'axios'


const ParkList = () => {

    const [parks, setParks] = useState([])

    const getParks = async () => {
        const response = await axios.get(`http://localhost:3001/api/themePark`)
        setParks(response.data.parks)
    }

    useEffect(() => {
        getParks()
    }, [])

    return (
        <div className="park-list">
            <h1>Parks</h1>
            <section className="container-grid">
                {parks.map((park) => (
                    <ParkCard
                        key={park._id}
                        objectId={park._id}
                        name={park.name}
                        image={park.image}
                    />
                ))}
            </section>

        </div>
    )
}

export default ParkList