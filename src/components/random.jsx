const Random = ({ min, max }) => {
    return (
        <div className="Random">
            <p>Random value between {min} and {max} = {Math.floor(Math.random() * (max - min) + min)}</p>
        </div>
    )
}

export default Random;