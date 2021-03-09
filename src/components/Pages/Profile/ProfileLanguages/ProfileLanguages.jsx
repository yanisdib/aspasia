import { useEffect } from 'react';

function ProfileLanguages({ canSpeak, isLearning }) {
    const spokenLanguages = canSpeak.map((spokenLanguage, i) => {
        return <li key={spokenLanguage.language} className="">{`${spokenLanguage.language} : ${spokenLanguage.proficiency}`}</li>;
    });
    const learningLanguages = isLearning.map((learningLanguage, i) => {
        return <li key={learningLanguage.language} className="">{`${learningLanguage.language} : ${learningLanguage.proficiency}`}</li>;
    })
    return (
        <div className="row profile-languages mt-5 mb-5 text-center">
            <div className="col-6 profile-languages-spoken">
                <h4 className="fw-6 mb-4">Can speak</h4>
                <ul className="list-group">
                    {spokenLanguages}
                </ul>
            </div>
            <div className="col-6 profile-languages-learning">
                <h4 className="fw-6 mb-4">Is learning</h4>
                <ul>
                    {learningLanguages}
                </ul>
            </div>
        </div>
    );
};

export default ProfileLanguages;