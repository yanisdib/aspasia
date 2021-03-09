function ProfileHobbies({ hobbies }) {
    console.log(hobbies)
    const hobbiesList = hobbies.map((hobby, i) => {
        return (
            <div key={`tag-${hobby}-${i}`} className="btn btn-tags-filled fw-5 m-2">
                {hobby}
            </div>
        );
    });
    return (
        <div className="row mt-5 mb-5">
            <div className="col">
                <h4 className="fw-5 mb-4">Hobbies</h4>
                {hobbiesList}
            </div>
        </div>
    );
};

export default ProfileHobbies;