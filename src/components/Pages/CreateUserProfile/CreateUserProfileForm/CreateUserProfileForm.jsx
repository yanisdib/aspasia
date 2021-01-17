import { useState } from "react";

import WizardForm from "../../../WizardForm/WizardForm";
import AboutStep from "./AboutStep/AboutStep";
import LanguagesStep from "./LanguagesStep/LanguagesStep";
import StepThree from "./StepThree/StepThree";

function CreateUserProfileForm() {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");
  const [canSpeak, setCanSpeak] = useState([
    { language: "English", proficiency: "Fluent" },
  ]);
  const [isLearning, setIsLearning] = useState([]);
  const [biography, setBiography] = useState("");
  return (
    <WizardForm pages={3}>
      <LanguagesStep
        canSpeak={canSpeak}
        isLearning={isLearning}
        setCanSpeak={setCanSpeak}
        setIsLearning={setIsLearning}
      />
      <AboutStep
        biography={biography}
        tags={tags}
        error={error}
        setBiography={setBiography}
        setTags={setTags}
        setError={setError}
      />
      <StepThree />
    </WizardForm>
  );
}

export default CreateUserProfileForm;
