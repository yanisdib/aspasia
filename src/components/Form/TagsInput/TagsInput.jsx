function TagsInput({ id, title, label, tags, setTags, error, setError }) {
  const onTagInputKeyPress = (e) => {
    const code = e.code || e.which;
    let tag = e.target.value;
    if (code === "Enter") {
      e.preventDefault();
      if (tag !== "") {
        setTags([...tags, tag]);
        e.target.value = "";
        setError("");
        return false; // prevents event from bubbling up
      } else {
        setError(`Please provide a correct value`);
      }
    } else {
      return true;
    }
  };
  const onTagButtonClick = (e) => {
    let selectedTag = e.target.textContent;
    console.log(selectedTag);
    setTags(tags.filter((tag) => tag !== selectedTag));
  };
  const renderButtonTags = () => {
    const buttonTags = tags.map((tag, i) => {
      return (
        <div
          key={`tag-${tag}-${i}`}
          className="btn btn-tags m-2"
          onClick={onTagButtonClick}
        >
          {tag}
        </div>
      );
    });
    return buttonTags;
  };

  return (
    <>
      <div className="form-group mb-3">
        <h5 className="fw-6 blue mb-4 mt-5">{title}</h5>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          className="form-control tags-input"
          placeholder="Type something and press enter"
          spellCheck="true"
          onKeyPress={onTagInputKeyPress}
        />
        <small id="tagInputHelp" className="red">
          {error}
        </small>
      </div>
      <div className="form-group mb-3">{renderButtonTags()}</div>
    </>
  );
}

export default TagsInput;
