import ProfileCard from './ProfileCard';
import profiles from '../data/berlin.json';

const FaceBook = ({ profiles_state, setProfiles }) => {

    const uniqueCountries = profiles.map(profile => profile.country);
    const uniqueCountriesSet = new Set(uniqueCountries);
    const uniqueCountriesArray = [...uniqueCountriesSet];
    uniqueCountriesArray.unshift('All');

    const handleClick = (event) => {
        const country = event.target.innerText;
        if (country === 'All') {
            setProfiles(profiles);
        } else {
            const filteredProfiles = profiles.filter(profile => profile.country === country);
            setProfiles(filteredProfiles);
        }
    }

    return (
        <div className="facebook-screen">

            <div className="btn-group">
                {uniqueCountriesArray.map((country, index) => (
                    <button key={index} onClick={handleClick}>{country}</button>
                ))}
            </div>

            {profiles_state.map((profile, index) => (
                <ProfileCard key={index} user={profile} />
            ))}
        </div>
    );
}


export default FaceBook;

