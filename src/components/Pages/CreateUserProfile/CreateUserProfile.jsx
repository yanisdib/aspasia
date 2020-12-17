import CreateUserProfileForm from "./CreateUserProfileForm/CreateUserProfileForm";
import background from '../../../assets/images/bg_profile_900x1080.jpg';

function CreateUserProfile() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '',
        height: '600px'
    };
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-6">
                    <div className="row mb-5">
                        <div className="col-6 p-0 align-right">
                            <h3 className="fw-6">You're almost there</h3>
                            <h6 className="fw-4 small gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a felis id nisl tempus bibendum quis et purus. Morbi sem lacus, volutpat a vulputate id, tempor et elit.
                            </h6>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-5">
                        <div className="col-8" style={backgroundStyle}>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row h-2 mb-5">
                        <div className="col-9 p-0 align-right">
                        </div>
                    </div>
                    <div className="row h-8">
                        <h3 className="fw-7 p-0">Would you tell us more about you?</h3>
                        <CreateUserProfileForm onSubmit={undefined} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUserProfile;