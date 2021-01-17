import React, { useState } from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function WizardForm({ children, pages }) {
  const [currentStep, setCurrentStep] = useState(1);
  const onPreviousButtonClick = () => {
    setCurrentStep(currentStep > 1 ? currentStep - 1 : 1);
  };

  const onNextButtonClick = () => {
    setCurrentStep(currentStep < pages ? currentStep + 1 : 3);
  };

  const renderPreviousButton = () => {
    if (currentStep > 1) {
      return (
        <Button type="secondary" mr={3} onClick={onPreviousButtonClick}>
          Previous
        </Button>
      );
    } else {
      return null;
    }
  };

  const renderNextButton = () => {
    if (currentStep < pages) {
      return (
        <Button type="primary" onClick={onNextButtonClick}>
          Next
        </Button>
      );
    } else {
      return null;
    }
  };

  const renderSubmitButton = () => {
    if ((currentStep === pages)) {
      return (
        <input
          type="submit"
          className="btn btn-primary fw-4 mt-4"
          value="Submit"
        />
      );
    }
  };

  return (
    <form className="mb-5" onSubmit={undefined}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { currentStep });
      })}
      {renderPreviousButton()}
      {renderNextButton()}
      {renderSubmitButton()}
    </form>
  );
}

WizardForm.propTypes = {
  currentStep: PropTypes.number,
};

export default WizardForm;
