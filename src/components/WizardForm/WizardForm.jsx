import React, { useState } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './_wizard-form.scss';

function WizardForm({ children, pages, onSubmit }) {
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
        <Button style='secondary' marginRight={3} onClick={onPreviousButtonClick}>
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
        <Button style='primary' onClick={onNextButtonClick}>
          Next
        </Button>
      );
    } else {
      return null;
    }
  };

  const renderSubmitButton = () => {
    if (currentStep === pages) {
      return (
        <input
          type='submit'
          className='btn btn-primary fw-4 mt-4'
          value='Submit'
        />
      );
    }
  };

  return (
    <form className='mb-5' onSubmit={onSubmit}>
      <h6 className='step-counter fw-6 mt-5'>
        Step {currentStep}/{pages}
      </h6>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { currentStep });
      })}
      <div className='form-row mb-3 justify-content-between'>
        {renderPreviousButton()}
        {renderNextButton()}
        {renderSubmitButton()}
      </div>
    </form>
  );
}

WizardForm.propTypes = {
  currentStep: PropTypes.number,
};

export default WizardForm;
