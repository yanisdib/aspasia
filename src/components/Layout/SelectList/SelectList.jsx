import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
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
  onFirstChange,
  onSecondChange,
}) {
  const [elements, setElements] = useState([]); // Array of new values added by user
  const [count, setCount] = useState(
    selectedOptions.length > 0 ? selectedOptions.length : 0
  );
  useEffect(() => {
    setDefaultElements();
  }, []);

  const onAddElementClick = () => {
    const index = elements.length + 1;
    const element = (
      <div className="form-row mt-3">
        <div className="col">
          <select
            className="form-control"
            data-index={index}
            value={selectedOptions[0].language}
            onChange={onFirstChange}
          >
            <option value="">Select an option {index}</option>
            {data[0].values}
          </select>
        </div>
        <div className="col">
          <select
            className="form-control"
            data-index={index}
            value={selectedOptions[0].proficiency}
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
    setElements([...elements, element]); // add new element to the existing ones
    setCount(count + 1);
  };

  const setDefaultElements = () => {
    let defaultElements;
    if (selectedOptions.length > 0) {
      defaultElements = selectedOptions.map((defaultElement, i) => {
        let margin = i === 0 ? "" : "mt-3";
        return (
          <div className={`form-row ${margin}`}>
            <div className="col">
              <select
                className="form-control"
                data-index={i}
                value={defaultElement.language}
                onChange={onFirstChange}
              >
                <option value="">Select an option {i}</option>
                {data[0].values}
              </select>
            </div>
            <div className="col">
              <select
                className="form-control"
                data-index={i}
                value={defaultElement.proficiency}
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
      setElements(defaultElements);
      console.log(count + " " + elements);
      setCount(elements.length);
    }
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
        {/*       <div className="form-row">
          <div className="col">
            <label htmlFor={`data-${data[0].label.toLowerCase()}`}>
              {data[0].label}
            </label>
            <select
              id={`data-${data[0].label.toLowerCase()}`}
              className="form-control"
              data-index={0}
              onChange={onFirstChange}
            >
              <option value="">Select an option</option>
              {data[0].values}
            </select>
          </div>
          <div className="col">
            <label htmlFor={`data-${data[1].label.toLowerCase()}`}>
              {data[1].label}
            </label>
            <select
              id={`data-${data[1].label.toLowerCase()}`}
              className="form-control"
              data-index={0}
              onChange={onSecondChange}
            >
              <option value="">Select an option</option>
              {data[1].values}
            </select>
          </div>
          </div>*/}
        {elements}
      </div>
    </div>
  );
}

export default SelectList;
