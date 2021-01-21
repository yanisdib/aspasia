import ReactPlayer from "react-player";

function VideoPresentation({ title, color, video, children }) {
  return (
    <div className={`row ${color}-video-pres d-flex`}>
      <div className="col-7 align-self-center pl-5 ml-5">
        <ReactPlayer
          className="react-player"
          muted={true}
          loop={true}
          playing={true}
          url={video}
          width={854}
          height={480}
        />
      </div>
      <div className="col-4 align-self-center">
        <h2 className="fw-6">{title}</h2>
        <p className="fw-3 pt-3">{children}</p>
      </div>
    </div>
  );
}

export default VideoPresentation;
