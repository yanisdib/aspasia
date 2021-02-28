import languageNameMap from 'language-name-map/map';
import SelectList from '../../../../Form/SelectList/SelectList';

function LanguagesStep(props) {
  const proficiencies = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Fluent',
    'Native',
  ];

  const languages = Object.keys(languageNameMap).map((code) => {
    return languageNameMap[code].name;
  });

  const renderLanguagesOptions = () => {
    const languageOptions = languages.map((language) => {
      return <option value={language}>{language}</option>;
    });
    return languageOptions;
  };
  const renderProficienciesOptions = () => {
    const proficiencyOptions = proficiencies.map((proficiency) => {
      return <option value={proficiency}>{proficiency}</option>;
    });
    return proficiencyOptions;
  };

  const optionsData = [
    { label: 'Language', values: renderLanguagesOptions() },
    { label: 'Proficiency', values: renderProficienciesOptions() },
  ];

  return props.currentStep === 2 ? (
    <>
      <h3 className='fw-6 mt-3'>Languages</h3>
      <p className='mt-3 w-75'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
        velit iaculis, lobortis neque vitae, fringilla felis. Mauris nec mi in
        justo tincidunt cursus.
      </p>
      <SelectList
        data={optionsData}
        title='I can speak'
        hasMany={true}
        selectedOptions={props.canSpeak}
        setOptions={props.setCanSpeak}
      />
      <SelectList
        data={optionsData}
        title="I'm learning"
        hasMany={true}
        selectedOptions={props.isLearning}
        setOptions={props.setIsLearning}
      />
    </>
  ) : null;
}

export default LanguagesStep;
