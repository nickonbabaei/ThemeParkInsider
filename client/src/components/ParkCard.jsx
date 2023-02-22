
const ParkCard = (props) => {

    return (
        <div className="container-grid">
            <div className='card park-card' key={props.key} onClick={props.onClick}>
            <div className='img-wrapper'>
                <img src={props.image} alt="park img" />
            </div>
            <div className='info-wrapper flex-col'>
                <h3>{props.name}</h3>
            </div>
        </div>
        </div>
       
    )
}

export default ParkCard