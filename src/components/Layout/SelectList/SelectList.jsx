import AddSelectButton from "../../Button/AddSelectButton";

/**
 * Render a list of one or many select element(s)
 * @param {object} param0
 * data (array of objects) have two properties =>
 * label (string) | values (func): renders a list of options
 */
function SelectList({
  data,
  title,
  hasMany,
  selectedOptions,
  setOptions,
  onSecondChange,
}) {
  const onFirstChange = (e) => {
    const i = parseInt(e.target.dataset.index);
    const selectedLanguage = e.target.value;
    let updatedOptions = [...selectedOptions];
    updatedOptions[i].language = selectedLanguage;
    setOptions(updatedOptions);
    console.log(selectedLanguage);
    console.log(selectedOptions);
    console.log(i);
  };

  const onAddElementClick = () => {
    setOptions([...selectedOptions, { language: "", proficiency: "" }]);
  };

  const renderElements = () => {
    return selectedOptions.map((element, i) => {
      let margin = i === 0 ? "" : "mt-3";
      return (
        <div className={`form-row ${margin}`}>
          <div className="col">
            <select
              className="form-control"
              data-index={i}
              value={element.language}
              onChange={onFirstChange}
            >
              <option value="">Select an option</option>
              {data[0].values}
            </select>
          </div>
          <div className="col">
            <select
              className="form-control"
              data-index={i}
              value={element.proficiency}
              onChange={onSecondChange}
            >
              <option key={``} value="">
                Select an option
              </option>
              {data[1].values}
            </select>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="form-row mt-5">
      <div className="col-12">
        <div className="form-row">
          <div className="col-10 mb-4">
            <h5 className="fw-6 blue">{title}</h5>
          </div>
          {hasMany === true ? ( // enables the possibility to add more select elements
            <AddSelectButton onClick={onAddElementClick} />
          ) : null}
        </div>
        {renderElements()}
      </div>
    </div>
  );
}

export default SelectList;
