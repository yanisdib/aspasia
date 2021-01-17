import AddSelectButton from "../../../../Button/AddSelectButton";

function StepThree(props) {
  return props.currentStep === 3 ? (
    <>
      <div className="form-row mt-5">
        <div className="col-9 mb-2">
          <h5 className="fw-6 blue">Any quotes which have blown your mind?</h5>
        </div>
        <AddSelectButton />
      </div>
      <div className="form-row mb-4">
        <div className="col">
          <label htmlFor="quoteInput">Quote</label>
          <textarea
            id="quoteInput"
            className="form-control"
            placeholder="Type a quote..."
          />
        </div>
        <div className="col">
          <label htmlFor="quoteAuthorInput">Author</label>
          <input
            type="text"
            id="quoteAuthorInput"
            className="form-control"
            placeholder="Author of the quote"
          />
        </div>
      </div>
    </>
  ) : null;
}

export default StepThree;
