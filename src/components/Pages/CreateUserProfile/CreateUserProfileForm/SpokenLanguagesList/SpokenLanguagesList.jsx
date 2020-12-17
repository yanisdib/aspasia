import { useState } from 'react';
import AddSelectButton from '../../../../Button/AddSelectButton';

function SpokenLanguagesList(props) {
    const [spokenLanguagesElements, setSpokenLanguagesElements] = useState([]);
    function renderLanguageOptions(languages) {
        const languageOptions = languages.map(language => {
            return (
                <option value={language}>{language}</option>
            );
        });
        return languageOptions;
    };
    function renderProficiencyOptions(proficiencies) {
        const proficiencyOptions = proficiencies.map(proficiency => {
            return (
                <option value={proficiency}>{proficiency}</option>
            );
        });
        return proficiencyOptions;
    };
    const onAddLanguagesClick = () => {
        const element = (
            <div className="form-row mt-3">
                <div className="col">
                    <select className="form-control">
                        <option value="">Select a language</option>
                        {renderLanguageOptions(props.languages)}
                    </select>
                </div>
                <div className="col">
                    <select className="form-control">
                        <option key={``} value="">Select a level</option>
                        {renderProficiencyOptions(props.proficiencies)}
                    </select>
                </div>
            </div>
        );
        setSpokenLanguagesElements([...spokenLanguagesElements, element]);
    };
    return (
        <div className="col-5">
            <div className="form-row">
                <div className="col-10 mb-4">
                    <h5 className="fw-6 blue">I can speak</h5>
                </div>
                <AddSelectButton onClick={onAddLanguagesClick} />
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="spokenLanguages">Languages</label>
                    <select className="form-control">
                        <option value="">Select a language</option>
                        {renderLanguageOptions(props.languages)}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="spokenLanguages">Proficiency</label>
                    <select className="form-control">
                        <option value="">Select a level</option>
                        {renderProficiencyOptions(props.proficiencies)}
                    </select>
                </div>
            </div>
            {spokenLanguagesElements}
        </div>
    );
};

export default SpokenLanguagesList;