import TagsInput from "../../../../Form/TagsInput/TagsInput";

function AboutStep(props) {
  const onBiographyChange = (e) => {
    const biography = e.target.value;
    props.setBiography(biography);
  };
  return props.currentStep === 2 ? (
    <>
      <div className="form-group mb-3">
        <h5 className="fw-6 blue mb-4 mt-5">Tell us something about you</h5>
        <label htmlFor="biographyTextArea">About</label>
        <textarea
          id="biographyTextArea"
          className="form-control"
          placeholder="50 characters minimum"
          rows="3"
          onChange={onBiographyChange}
          defaultValue={props.biography}
        />
        <small id="biographyTextAreaHelp" className="fw-5 red">
          This field is mandatory
        </small>
      </div>
      <TagsInput
        id="hobbiesInput"
        title="What are your passions and hobbies?"
        label="Interests"
        tags={props.tags}
        setTags={props.setTags}
        error={props.error}
        setError={props.setError}
      />
    </>
  ) : null;
}

export default AboutStep;
