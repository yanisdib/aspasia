import CreateUserProfileForm from "./CreateUserProfileForm/CreateUserProfileForm";
import background from "../../../assets/images/bg_profile_900x1080.jpg";

function CreateUserProfile() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPositionY: "center",
    height: "600px",
  };
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6">
          <div className="row mb-5">
            <div className="col-10 p-0 align-right">
              <h3 className="fw-6">Before you go further...</h3>
              <p className="fw-4">
                To make sure you find the best people out there, we need you to
                complete your profile. We will take care of the rest once you're done.
              </p>
            </div>
          </div>
          <div className="row justify-content-end mt-5">
            <div className="col-10" style={backgroundStyle}></div>
          </div>
        </div>
        <div className="col-5">
          <div className="row h-1">
            <div className="col-9 p-0 align-right"></div>
          </div>
          <div className="row">
            <CreateUserProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserProfile;
