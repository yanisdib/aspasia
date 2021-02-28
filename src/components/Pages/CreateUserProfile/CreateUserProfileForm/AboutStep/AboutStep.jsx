function AboutStep(props) {
  const genders = ['Male', 'Female'];
  const preferenceOptions = [
    'Language exchange',
    'Friendship',
    'Meet in person',
  ];
  console.log(props.preferences);
  const onGenderChange = (e) => {
    const gender = e.target.value;
    props.setGender(gender);
  };
  const onPreferencesChange = (e) => {
    const preferencesArray = [...props.preferences];
    const checkedPreference = preferencesArray.find(
      (preference) => preference === e.target.value
    );
    checkedPreference
      ? preferencesArray.splice(preferencesArray.indexOf(checkedPreference), 1)
      : preferencesArray.push(e.target.value);
    props.setPreferences(preferencesArray);
  };
  const onBiographyChange = (e) => {
    const biography = e.target.value;
    props.setBiography(biography);
  };
  const renderGenders = () => {
    const gendersList = genders.map((gender, i) => {
      return (
        <div className='col-2'>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id={`genderOption-${i}`}
              value={gender}
              onChange={onGenderChange}
            />
            <label className='form-check-label' htmlFor={`genderOption-${i}`}>
              {gender}
            </label>
          </div>
        </div>
      );
    });
    return gendersList;
  };
  const renderPreferences = () => {
    const preferenceOptionsList = preferenceOptions.map(
      (preferenceOption, i) => {
        return (
          <div className='form-check' key={`preference-${i}`}>
            <input
              className='form-check-input position-static'
              type='checkbox'
              id={`preferenceCheckbox-${i}`}
              value={preferenceOption}
              aria-label='...'
              onChange={onPreferencesChange}
            />
            <label
              className='form-check-label pl-2'
              htmlFor={`preferenceCheckbox-${i}`}
            >
              {preferenceOption}
            </label>
          </div>
        );
      }
    );
    return preferenceOptionsList;
  };
  return props.currentStep === 1 ? (
    <>
      <h3 className='fw-6 mt-3'>General</h3>
      <p className='mt-3 w-75'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
        velit iaculis, lobortis neque vitae, fringilla felis. Mauris nec mi in
        justo tincidunt cursus.
      </p>
      <div className='form-group mt-4'>
        <h5 className='fw-6 blue mb-4 mt-3'>Gender</h5>
        <div className='form-row'>{renderGenders()}</div>
      </div>
      <div className='form-group mt-3'>
        <h5 className='fw-6 blue mb-4 mt-4'>What are you looking for?</h5>
        {renderPreferences()}
      </div>
      <div className='form-group mt-4'>
        <h5 className='fw-6 blue mb-4 mt-3'>Tell us something about you</h5>
        <label htmlFor='biographyTextArea'>About</label>
        <textarea
          id='biographyTextArea'
          className='form-control'
          placeholder='50 characters minimum'
          rows='3'
          onChange={onBiographyChange}
          defaultValue={props.biography}
        />
        <small id='biographyTextAreaHelp' className='fw-5 red'>
          This field is mandatory
        </small>
      </div>
    </>
  ) : null;
}

export default AboutStep;
