import { useState } from 'react';
import PropTypes from 'prop-types';
import WizardForm from '../../../WizardForm/WizardForm';
import AboutStep from './AboutStep/AboutStep';
import LanguagesStep from './LanguagesStep/LanguagesStep';
import InterestStep from './InterestStep/InterestStep';

function CreateUserProfileForm(props) {
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [hobbiesTags, setHobbiesTags] = useState([]);
  const [musicGenresTags, setMusicGenresTags] = useState([]);
  const [error, setError] = useState('');
  const [canSpeak, setCanSpeak] = useState([{ language: '', proficiency: '' }]);
  const [isLearning, setIsLearning] = useState([
    { language: '', proficiency: '' },
  ]);
  const [biography, setBiography] = useState('');
  const pages = props.pages;
  const onSubmit = (e) => {
    e.preventDefault();
    if (gender && biography && canSpeak && isLearning) {
      props.onSubmit({
        gender:gender,
        isLookingFor: preferences, 
        biography: biography,
        canSpeak: canSpeak,
        isLearning: isLearning,
        favoriteMusic: musicGenresTags,
        hobbies: hobbiesTags
      });
    } else {
      setError("Please complete all mandatory fields")
    };
  };

  return (
    <WizardForm pages={pages} onSubmit={onSubmit}>
      <AboutStep
        gender={gender}
        preferences={preferences}
        biography={biography}
        error={error}
        setGender={setGender}
        setPreferences={setPreferences}
        setBiography={setBiography}
        setError={setError}
      />
      <LanguagesStep
        canSpeak={canSpeak}
        isLearning={isLearning}
        setCanSpeak={setCanSpeak}
        setIsLearning={setIsLearning}
      />
      <InterestStep
        hobbiesTags={hobbiesTags}
        musicGenresTags={musicGenresTags}
        error={error}
        setHobbiesTags={setHobbiesTags}
        setMusicGenresTags={setMusicGenresTags}
        setError={setError}
      />
    </WizardForm>
  );
}

CreateUserProfileForm.propTypes = {
  pages: PropTypes.number.isRequired,
};

export default CreateUserProfileForm;
