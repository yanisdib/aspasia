import LearnedLanguagesList from "./LearnedLanguagesList/LearnedLanguagesList";
import SpokenLanguagesList from "./SpokenLanguagesList/SpokenLanguagesList";
import languageNameMap from 'language-name-map/map'

function CreateUserProfileForm() {

    const proficiencies = ['Beginner', 'Intermediate', 'Advanced', 'Fluent', 'Native'];
    const languages = Object.keys(languageNameMap).map((code) => {
        return languageNameMap[code].name;
    });

    return (
        <form className="mb-5">
            <div className="form-row justify-content-between">
                <SpokenLanguagesList languages={languages} proficiencies={proficiencies} />
                <LearnedLanguagesList languages={languages} proficiencies={proficiencies} />
            </div>
            <div className="form-group mt-5">
                <h5 className="fw-6 blue">Tell us something about you</h5>
                <label htmlFor="biographyTextArea">About</label>
                <textarea className="form-control" placeholder="50 characters minimum" rows="3" />
                <small id="biographyTextAreaHelp" className="fw-5 blue">This field is mandatory</small>
            </div>
            {/* <h5 className="fw-6 mb-4 mt-5">What are your favorite movies?</h5>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="movieInput">Title</label>
                    <input type="text" id="movieInput" className="form-control" placeholder="Title of the movie" />
                    <small id="movieInputHelp" className="fw-5 blue">This field is mandatory</small>
                </div>
                <div className="col">
                    <label htmlFor="directorInput">Director</label>
                    <input type="text" id="directorInput" className="form-control" placeholder="Director of the movie" />
                </div>
            </div>
            <h5 className="fw-6 mb-4 mt-5">What are your favorite books?</h5>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="bookInput">Title</label>
                    <input type="text" id="bookInput" className="form-control" placeholder="Title of the book" />
                </div>
                <div className="col">
                    <label htmlFor="authorInput">Author</label>
                    <input type="text" id="authorInput" className="form-control" placeholder="Author of the book" />
                </div>
            </div>
            <h5 className="fw-6 mb-4 mt-5">What are your favorite quotes?</h5>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="quoteInput">Quote</label>
                    <textarea id="quoteInput" className="form-control" placeholder="Type a quote..." />
                </div>
                <div className="col">
                    <label htmlFor="quoteAuthorInput">Author</label>
                    <input type="text" id="quoteAuthorInput" className="form-control" placeholder="Author of the quote" />
                </div> 
            </div> */}
        </form>
    );
};

export default CreateUserProfileForm;