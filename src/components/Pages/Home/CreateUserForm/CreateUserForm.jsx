import data from 'country-data/data/countries.json';
import useInput from '../../../../hooks/useInput';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useState } from 'react';
import { SingleDatePicker } from 'react-google-flight-datepicker';
import { checkEmail, checkPassword, comparePassword } from '../../../../utils/form-controls';


const propTypes = {
    date: PropTypes.object,
    focused: PropTypes.bool,
    onDateChange: PropTypes.object
};

const defaultProps = {
    dateFormat: 'DD/MM/YYYY',
    invalid: false,
    disabled: false,
    countries: ''
};

function CreateUserForm(props) {


    const calendarStyle = {
        border: "2px solid #ced4da"
    };

    const maxYear = moment().format('YYYY') - 16;
    // Hooks
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
    const { value: passwordBis, bind: bindPasswordBis, reset: resetPasswordBis } = useInput('');
    const { value: country, bind: bindCountry, reset: resetCountry } = useInput('');
    const { value: city, bind: bindCity, reset: resetCity } = useInput('');
    const [birthdate, setBirthdate] = useState(moment().subtract(16, "years"));
    const [calendarFocused, setCalendarFocused] = useState(false);
    const [errorForm, setErrorForm] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    function renderCountriesList() {
        const countries = data;
        return countries.map(country => (
            <option value={country.name.toLowerCase()}>{country.name}</option>
        ));
    };

    const onDateChange = (birthdate) => {
        if (birthdate) {
            setBirthdate(birthdate);
        };
    };

    const onFocusChange = ({ focused }) => {
        setCalendarFocused(focused);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let isValidEmail = checkEmail(email);
        let isValidPassword = checkPassword(password);
        let hasMatchingPasswords = comparePassword(password, passwordBis);
        if (!email || !password) {
            setErrorForm('Please provide valid email and password');
        }
        else {
            if (isValidEmail && isValidPassword && hasMatchingPasswords) {
                props.onSubmit(
                    {
                        firstName,
                        lastName,
                        username,
                        birthdate: birthdate.format("DD/MM/YYYY"),
                        email,
                        password,
                        country,
                        city
                    }
                );
                setErrorForm('');
                setErrorEmail('');
                setErrorPassword('');
                setErrorPassword('');
                resetFirstName();
                resetLastName();
                resetUsername();
                resetPassword();
                resetPasswordBis();
                resetCountry();
                resetEmail();
                resetCity();
                console.log('User successfully created!')
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
                    <label htmlFor="birthdateInput">Birthdate</label>
                    <br />
                    <SingleDatePicker
                        date={birthdate}
                        startDatePlaceholder="Date"
                        startDate={moment().subtract(16, "years")}
                        maxDate={new Date(maxYear, 12, 31)}
                        onDateChange={onDateChange}
                        focused={calendarFocused}
                        onFocusChange={onFocusChange}
                        numberOfMonths={0}
                        isOutsideRange={() => false}
                        dateFormat={'DD/MM/YYYY'}
                        singleCalendar={true}
                        id="birthdateInput"
                        style={calendarStyle}
                    />
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
                            {renderCountriesList()}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">City</label>
                        <input type="text" id="cityInput" className="form-control" placeholder="City" {...bindCity} />
                    </div>
                </div>
                <br />
                <small id="formHelp" className="red">{errorForm}</small>
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

CreateUserForm.propTypes = propTypes;
CreateUserForm.defaultProps = defaultProps;

export default CreateUserForm;