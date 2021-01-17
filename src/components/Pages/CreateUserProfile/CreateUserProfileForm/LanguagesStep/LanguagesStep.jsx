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

  const onSpokenLanguageChange = (e) => {
    let spokenLanguages = [...props.canSpeak];
    const index = parseInt(e.target.dataset.index);
    let selectedLanguage = e.target.value;
    if (index === 0 || spokenLanguages[index]) {
      props.setCanSpeak([
        {
          ...spokenLanguages[index],
          language: selectedLanguage,
        },
      ]);
    } else {
      props.setCanSpeak([...spokenLanguages, { language: selectedLanguage }]);
    }
  };

  const onSpokenProficiencyChange = (e) => {
    let spokenProficiencies = [...props.canSpeak];
    const index = parseInt(e.target.dataset.index);
    console.log(spokenProficiencies);
    const selectedLanguage = props.canSpeak[index] ? props.canSpeak[index].language : "";
    let selectedProficiency = e.target.value;
    if (index === 0 || spokenProficiencies[index]) {
      props.setCanSpeak([
        { ...spokenProficiencies[index], proficiency: selectedProficiency },
      ]);
    } else {
      props.setCanSpeak([
        ...spokenProficiencies,
        { proficiency: selectedProficiency },
      ]);
    }
  };

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
        onFirstChange={onSpokenLanguageChange}
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
