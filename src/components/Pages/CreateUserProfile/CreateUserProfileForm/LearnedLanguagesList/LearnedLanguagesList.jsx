import { useState } from 'react';
import AddSelectButton from '../../../../Button/AddSelectButton';

function LearnedLanguagesList() {
    const [learnedLanguagesElements, setLearnedLanguagesElements] = useState([]);
    const onAddLanguagesClick = () => {
        const element = (
            <div className="form-row mt-3">
                <div className="col">
                    <select className="form-control">
                        <option value="">Select a language</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-control">
                        <option value="">Select a level</option>
                    </select>
                </div>
            </div>
        );
        setLearnedLanguagesElements([...learnedLanguagesElements, element]);
    };
    return (
        <div className="col-5">
            <div className="form-row">
                <div className="col-10 mb-4">
                    <h5 className="fw-6 blue">I'm learning</h5>
                </div>
                <AddSelectButton onClick={onAddLanguagesClick} />
            </div>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="spokenLanguages">Languages</label>
                    <select className="form-control">
                        <option value="">Select a language</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="spokenLanguages">Proficiency</label>
                    <select className="form-control">
                        <option value="">Select a level</option>
                    </select>
                </div>
            </div>
            {learnedLanguagesElements}
        </div>
    );
};

export default LearnedLanguagesList;