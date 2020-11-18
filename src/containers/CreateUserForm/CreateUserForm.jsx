import countries from 'country-data/data/countries.json';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { checkEmail, checkPassword, validatePassword } from '../../utils/form-controls';

function renderCountriesList(countries) {
    return countries.map(country => {
        return <option value={country.name.toLowerCase()}>{country.name}</option>
    });
};

function CreateUserForm(props) {
    /**
     * Input Hooks
     */
    const { value: firstName, bind: bindFirstName } = useInput('');
    const { value: lastName, bind: bindLastName } = useInput('');
    const { value: username, bind: bindUsername } = useInput('');
    const { value: email, bind: bindEmail } = useInput('');
    const { value: password, bind: bindPassword } = useInput('');
    const { value: passwordBis, bind: bindPasswordBis } = useInput('');
    const { value: country, bind: bindCountry } = useInput('');
    const { value: city, bind: bindCity } = useInput('');
    const { value: birthdate, bind: bindBirthdate } = useInput('');
    const [errorForm, setErrorForm] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        let isValidEmail = checkEmail(email);
        let isValidPassword = checkPassword(password);
        let hasMatchingPasswords = validatePassword(password, passwordBis);
        if (!email || !password) {
            setErrorForm('Please provide an email and a password');
        }
        else {
            setErrorForm('');
            if (isValidEmail && isValidPassword && hasMatchingPasswords) {
                props.onSubmit(
                    {
                        firstName,
                        lastName,
                        username,
                        birthdate,
                        email,
                        password,
                        country,
                        city
                    }
                );
                console.log('User successfully created!')
                document.getElementById('createAccountForm').reset();
            }
            else if (!isValidEmail) {
                setErrorEmail('Please provide a valid email');
            }
            else if (!isValidPassword) {
                setErrorPassword('Please provide a valid password');
            }
            else if (!hasMatchingPasswords) {
                setErrorPassword(`The password and confirmation don't match`)
            };
        };
    };

    return (
        <>
            <form id="createAccountForm" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="firstNameInput">First name</label>
                        <input type="text" id="firstNameInput" className="form-control" placeholder="John" {...bindFirstName} />
                        <small id="nameDetail">Your name won't be displayed</small>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">Last name</label>
                        <input type="text" id="lastNameInput" className="form-control" placeholder="Doe" {...bindLastName} />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" id="usernameInput" className="form-control" placeholder="Username" {...bindUsername} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id="emailInput" className="form-control" placeholder="Enter your email address" {...bindEmail} />
                    <small id="emailHelp" className="red">{errorEmail}</small>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" className="form-control" placeholder="Password" {...bindPassword} />
                    <small id="passwordDetail">At least 8 characters using alphanumeric and special characters</small>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="passwordConfirmationInput">Confirm the password</label>
                    <input type="password" id="passwordConfirmationInput" className="form-control" placeholder="Confirm your password" {...bindPasswordBis} />
                    <small id="passwordHelp" className="red">{errorPassword}</small>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="countryInput">Country</label>
                        <select name="country" id="countrySelect" className="form-control" {...bindCountry}>
                            <option value="">Select your country</option>
                            {renderCountriesList(countries)}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">City</label>
                        <input type="text" id="cityInput" className="form-control" placeholder="City" {...bindCity} />
                    </div>
                    <small id="formHelp" className="red">{errorForm}</small>
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