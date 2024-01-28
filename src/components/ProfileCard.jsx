const ProfileCard = ({ user }) => {
    return (
        <div className="facebook-card">
            <img src={user.img} alt="user" />
            <div className="facebook-card-body">
                <p className="facebook-card-text"><strong>First name:</strong> {user.firstName}</p>
                <p className="facebook-card-text"><strong>Last name:</strong> {user.lastName}</p>
                <p className="facebook-card-text"><strong>Country:</strong> {user.country}</p>
                <p className="facebook-card-text"><strong>Type:</strong> {user.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
        </div>
    );
}

export default ProfileCard;