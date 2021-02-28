import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import VideoPresentation from "../../Layout/VideoPresentation/VideoPresentation";
import PresentationLayout from "../../Layout/PresentationLayout/PresentationLayout";
import "./_home.scss";

import firstBackground from "../../../assets/images/bg_detail_01_1350x900.jpg";
import secondBackground from "../../../assets/images/bg_detail_02_1350x900.jpg";
import thirdBackground from "../../../assets/images/bg_detail_03_600x900.jpg";
import fourthBackground from "../../../assets/images/bg_detail_04_600x900.jpg";
import presentationVideo from "../../../assets/videos/friends_car_1920x1080.mp4";
import introVideo from "../../../assets/videos/home_intro_1920x1080.mp4";
import Button from "../../Button/Button";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const images = [firstBackground, secondBackground];
  const imagesReversed = [thirdBackground, fourthBackground];
  const introText = {
    width: "100%",
    position: "absolute",
    top: "50%",
    color: "rgb(95,95,95)",
    fontStroke: "2px white"
  };
  const onStartButtonClick = () => {
    history.push('/sign-up');
  }
  return (
    <>
      <div className="row justify-content-between burst-heading">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 align-center align-self-center mx-auto">
          <ReactPlayer
            className="react-player"
            muted={true}
            loop={true}
            playing={true}
            width={"100%"}
            height={"100%"}
            url={introVideo}
          />
          <div className="row" style={introText}>
            <div className="col-12 text-center">
              <h2 className="fw-6">Welcome to Google Pals</h2>
              <Button style="primary" onClick={onStartButtonClick}>Start for free</Button>
            </div>
          </div>
        </div>
      </div>
      <PresentationLayout
        title="Learn with people around the world"
        images={images}
        isReversed={false}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        mattis odio vel viverra. 
      </PresentationLayout>
      <VideoPresentation
        title="Reach people beyond the frontiers"
        video={presentationVideo}
        color="dark"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        mattis odio vel viverra. Pellentesque tempus lectus et volutpat
        vehicula. Curabitur vulputate tempus lacus sed cursus.
      </VideoPresentation>
      <PresentationLayout
        title="Make friends from other countries"
        images={imagesReversed}
        isReversed={true}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        mattis odio vel viverra. 
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

export default Home;
