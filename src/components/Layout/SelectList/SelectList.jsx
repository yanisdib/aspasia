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
    selectedOptions.length > 0 ? selectedOptions.length : 1
  );
  useEffect(() => {
    getElements();
  }, [count]);

  const onAddElementClick = () => {
    {
      /*  const index = elements.length + 1;
    console.log(index);
    const element = (
      <div className="form-row mt-3">
        <div className="col">
          <select
            className="form-control"
            data-index={index}
            value=""
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
            value=""
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
    setElements([...elements, element]); // add new element to the existing ones*/
    }
    setCount(count + 1);
  };

  const getElements = () => {
    for (let i = 0; i < count; i++) {
      let margin = i === 0 ? "" : "mt-3";
      const element = (
        <div className={`form-row ${margin}`}>
          <div className="col">
            <select
              className="form-control"
              data-index={i}
              value={selectedOptions[i] ? selectedOptions[i].language : ""}
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
              value={selectedOptions[i] ? selectedOptions[i].proficiency : ""}
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
      setElements([...elements, element]);
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
        {elements}
      </div>
    </div>
  );
}

export default SelectList;
