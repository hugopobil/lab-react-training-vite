const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className="idCard">
            <img src={picture} alt="profile" />
            <div className="idcard-content">
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}cm</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;