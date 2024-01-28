import Rating from "./Rating";

const DriverCard = (props) => {
    return (
        <div className="driver-card">
            <img src={props.img} alt={props.name} />
            <div className="driver-card-info">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;