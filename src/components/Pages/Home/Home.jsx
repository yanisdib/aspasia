import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import PresentationLayout from "../../Layout/PresentationLayout/PresentationLayout";

import firstBackground from "../../../assets/images/bg_detail_01_1350x900.jpg";
import secondBackground from "../../../assets/images/bg_detail_02_1350x900.jpg";
import thirdBackground from "../../../assets/images/bg_detail_03_600x900.jpg";
import fourthBackground from "../../../assets/images/bg_detail_04_600x900.jpg";
import presentationVideo from "../../../assets/videos/friends_car_1920x1080.mp4";

import "./_home.scss";

function Home() {
  const images = [firstBackground, secondBackground];
  const imagesReversed = [thirdBackground, fourthBackground];
  return (
    <>
      <div className="container">
        <div className="row justify-content-between mtb-2 burst-heading">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-6 mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
            <h2 className="fw-6"></h2>
            <p className="pl-4 mb-5 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              felis id nisl tempus bibendum quis et purus.
            </p>
          </div>
        </div>
      </div>
      <PresentationLayout
        title="Meet people from all around the world"
        images={images}
        isReversed={false}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        mattis odio vel viverra. Pellentesque tempus lectus et volutpat
        vehicula. Curabitur vulputate tempus lacus sed cursus.
      </PresentationLayout>
      <div className="row b-present d-flex">
        <div className="col-8 align-self-center pl-5 ml-5">
          <ReactPlayer
            className="react-player"
            muted={true}
            loop={true}
            playing={true}
            url={presentationVideo}
            width={854}
            height={480}
          />
        </div>
        <div className="col-3 align-self-center">
          <h2 className="fw-6">Reach people beyond the frontiers</h2>
          <p className="fw-3 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dictum mattis odio vel viverra. Pellentesque tempus lectus et
            volutpat vehicula. Curabitur vulputate tempus lacus sed cursus.
          </p>
        </div>
      </div>
      <PresentationLayout
        title="Make friends from other countries"
        images={imagesReversed}
        isReversed={true}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        mattis odio vel viverra. Pellentesque tempus lectus et volutpat
        vehicula. Curabitur vulputate tempus lacus sed cursus.
      </PresentationLayout>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  isReversed: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Home.defaultProps = {
  countries: {},
};

{
  /*const mapDispatchToProps = (dispatch) => ({
  startCreateUserWithEmailAndPassword: (user) =>
    dispatch(startCreateUserWithEmailAndPassword(user)),
});*/
}

export default Home;
