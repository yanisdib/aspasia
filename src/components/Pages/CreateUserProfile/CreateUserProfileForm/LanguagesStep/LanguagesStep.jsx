import languageNameMap from "language-name-map/map";
import SelectList from "../../../../Layout/SelectList/SelectList";

function LanguagesStep(props) {
  const proficiencies = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Fluent",
    "Native",
  ];

  const languages = Object.keys(languageNameMap).map((code) => {
    return languageNameMap[code].name;
  });

  const onSpokenProficiencyChange = (e) => {};

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
    { label: "Language", values: renderLanguagesOptions() },
    { label: "Proficiency", values: renderProficienciesOptions() },
  ];

  return props.currentStep === 1 ? (
    <>
      <SelectList
        data={optionsData}
        title="I can speak"
        hasMany={true}
        selectedOptions={props.canSpeak}
        setOptions={props.setCanSpeak}
        onSecondChange={onSpokenProficiencyChange}
      />
      {/* <SelectList
        data={optionsData}
        title="I'm learning"
        hasMany={true}
        isLearning={props.isLearning}
      /> */}
    </>
  ) : null;
}

export default LanguagesStep;
