import { Link } from 'react-router-dom'

const ParkCard = (name, image, objectId) => {

    return (
        <Link to={`/themeParks/${objectId}`}>
        <div className='park-card'>
            <div className='img-wrapper'>
                <img src={image} alt={image} />
            </div>
            <div className='info-wrapper flex-col'>
                {name}
            </div>
        </div>
        </Link>
    )
}

export default ParkCard