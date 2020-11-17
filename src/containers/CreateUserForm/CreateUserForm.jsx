import countries from 'country-data/data/countries.json';
function getCountriesList(countries) {
    return countries.map(country => {
        return <option value={country.name.toLowerCase()}>{country.name}</option>
    });
};

function CreateUserForm() {
    return (
        <>
            <form>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="firstNameInput">First name</label>
                        <input type="text" id="firstNameInput" className="form-control" placeholder="John" />
                        <small id="nameDetail">Your name won't be displayed</small>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">Last name</label>
                        <input type="text" id="lastNameInput" className="form-control" placeholder="Doe" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" id="usernameInput" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id="emailInput" className="form-control" placeholder="Enter your email address" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" className="form-control" placeholder="Password" />
                    <small id="passwordDetail">At least 8 characters using alphanumeric and special characters</small>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="passwordConfirmationInput">Confirm the password</label>
                    <input type="password" id="passwordConfirmationInput" className="form-control" placeholder="Confirm your password" />
                </div>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="countryInput">Country</label>
                        <select name="country" id="countrySelect" className="form-control">
                            <option value="">Select your country</option>
                            {getCountriesList(countries)}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">City</label>
                        <input type="text" id="cityInput" className="form-control" placeholder="City" />
                    </div>
                </div>
                <div className="form-group mt-4">
                    <input type="submit" className="btn btn-primary" value="Create an account" />
                </div>
                <div className="form-group mt-4">
                    <small className="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a felis id nisl tempus bibendum quis et purus. Morbi sem lacus, volutpat a vulputate id, tempor et elit.</small>
                </div>
            </form>
        </>
    );
};

export default CreateUserForm;