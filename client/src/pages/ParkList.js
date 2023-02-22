import ParkCard from "../components/ParkCard"
import { useState, useEffect } from "react"
import axios from 'axios'


const ParkList = () => {

    const [parks, setParks] = useState([])

    useEffect(() => {
        const getParks = async () => {
            const response = await axios.get(`http://localhost:3001/api/themeParks`)
            setParks(response.data.parks)
            // console.log(response.data.parks)
        }
        getParks()
    }, [])

    return (
        <div className="park-list">
            <h1>Parks</h1>
            <section className="container-grid">
                {parks.map((park) => (
                    <ParkCard
                        key={park._id}
                        {...park}
                        name={park.name}
                        image={park.image}
                    />
                ))}
            </section>

        </div>
    )
}

export default ParkList