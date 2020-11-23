import useInput from '../../../../hooks/useInput';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useState } from 'react';
import { SingleDatePicker } from 'react-google-flight-datepicker';
import { checkEmail, checkPassword, comparePassword } from '../../../../utils/form-controls';
import { useDispatch, useSelector } from 'react-redux';
import { startGetCities } from '../../../../actions/countries';

const propTypes = {
    date: PropTypes.object,
    focused: PropTypes.bool,
    onDateChange: PropTypes.object
};

const defaultProps = {
    dateFormat: 'DD/MM/YYYY',
    invalid: false,
    disabled: false,
    cities: {}
};

function CreateUserForm(props) {
    const calendarStyle = {
        border: "2px solid #ced4da"
    };
    const maxYear = moment().format('YYYY') - 16;

    // Hooks
    const dispatch = useDispatch();
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
    const { value: passwordBis, bind: bindPasswordBis, reset: resetPasswordBis } = useInput('');
    const [country, setCountry] = useState('');
    const { value: city, bind: bindCity, reset: resetCity } = useInput('');
    const [iso, setIso] = useState('');
    const [birthdate, setBirthdate] = useState(moment().subtract(16, "years"));
    const [calendarFocused, setCalendarFocused] = useState(false);
    const [errorForm, setErrorForm] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const cities = useSelector(state => state.cities);

    /**
     * UPDATE: Func will be changed into a selector
     */
    function renderCountriesList() {
        const countries = props.countries;
        const countriesList = countries.map((country, i) => (
            <option key={`${country.key}-${i}`} value={country.value} data-iso={country.iso_a3}>{country.value}</option>
        ));
        return countriesList;
    };

    const onCountryChange = async (e) => {
        const country = e.target.value;
        setCountry(country);
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
                setCountry('');
                setIso('');
                resetFirstName();
                resetLastName();
                resetUsername();
                resetPassword();
                resetPasswordBis();
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

    console.log(cities);
    console.log(iso);

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
                        <select name="country" id="countrySelect" className="form-control" onChange={onCountryChange}>
                            <option value="">Select your country</option>
                            {renderCountriesList()}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="lastNameInput">City</label>
                        <select name="city" id="citySelect" className="form-control" {...bindCity}>
                            <option value="">Select your city</option>
                        </select>
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