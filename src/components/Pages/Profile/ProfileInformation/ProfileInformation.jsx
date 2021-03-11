import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
function ProfileInformation({ city, country, birthdate, isLookingFor }) {
    console.log(isLookingFor)
    const interests = isLookingFor.map((option, i) => {
        return i + 1 !== isLookingFor.length ? (
            `${option} —`
        ) : option;
    }).join(' ');
    return (
        <>
            <div className="row w-75 profile-info mt-2 mb-1">
                <div className="col-12"><LocationOnRoundedIcon /> {`From ${city}, ${country}`}</div>
                <div className="col-12"><h6 className="fw-4"><GroupRoundedIcon /> {`Looking for ${interests}`}</h6></div>
                <div className="col-12"><h6 className="fw-4"><CakeRoundedIcon /> {`Born in ${birthdate.slice(6)}`}</h6></div>
            </div >
        </>
    );
};
export default ProfileInformation;