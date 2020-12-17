import moment from 'moment';
import { firebase, database } from '../firebase/firebase';

/**
 * Returns an action dispatched to a Redux store
 * Passed the user data received from startCreateUserWithEmailAndPassword
 * @param {object} user 
 */
export const createUserWithEmailAndPassword = (user) => ({
    type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
    user
});

/**
 * Create user using Firebase Auth functions
 * Return an asynchronous function that returns a promise
 * which dispatches the action CREATE_USER_WITH_EMAIL_AND_PASSWORD
 * and push the data received by the resolved promise to database
 * @param {object} userDefaultData 
 */
export const startCreateUserWithEmailAndPassword = (userDefaultData = {}) => {
    return async (dispatch) => {
        const {
            firstName = '',
            lastName = '',
            username = '',
            birthdate = 0,
            country = '',
            city = '',
            email = '',
            password = '',
            isAdmin = false,
            isVerified = false,
            isSuper = false
        } = userDefaultData;
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password); // returns an object user
            const user = result.user;
            const createdAt = user.metadata.a ? user.metadata.a : 0; // Time when Firebase created the account
            const userData = { firstName, lastName, username, birthdate, country, city, email, password, isAdmin, isVerified, isSuper, createdAt };
            const res = await dispatch(createUserWithEmailAndPassword({
                id: user.uid,
                createdAt: createdAt,
                ...userData
            }));
            return database.ref('users')
                .push(res.user);
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
    };
};

/**
 * Returns an action dispatched to a Redux store
 * Passed the profile data received from startCreateUserProfile
 * @param {object} profile 
 */
export const createUserProfile = (profile) => {
    return {
        type: 'CREATE_USER_PROFILE',
        profile
    };
};

/**
 * Create the current user's profile
 * Return an asynchronous function that returns a promise
 * which dispatches the action CREATE_USER_PROFILE
 * and push the data received by the resolved promise to database
 * @param {object} userDefaultData 
 */
export const startCreateUserProfile = (profileDefaultData = {}) => {
    return async (dispatch, getState) => {
        const {
            status = '',
            biography = '',
            education = '',
            job = '',
            spokenLanguages = [{
                language: '',
                proficiency: ''
            }],
            learnedLanguages = [{
                language: '',
                proficiency: ''
            }],
            request = '',
            hobbies = '',
            favoriteMusic = [{
                music: '',
                comment: ''
            }],
            favoriteMovies = [{
                movie: '',
                comment: ''
            }],
            favoriteBooks = [{
                book: '',
                comment: ''
            }],
            favoriteQuotes = [{
                text: '',
                author: ''
            }],
            isLookingFor = [],
            pictures = [{
                url: '',
                alt: '',
                description: '',
                isProfile: false,
                isCover: false
            }]
        } = profileDefaultData;
        const profileData = {
            status,
            biography,
            education,
            job,
            spokenLanguages,
            learnedLanguages,
            request,
            hobbies,
            favoriteMusic,
            favoriteMovies,
            favoriteBooks,
            favoriteQuotes,
            isLookingFor,
            pictures
        };
        try {
            const uid = getState().auth.uid; // Current user ID
            const result = await dispatch(createUserProfile({
                lastModifiedAt: moment.now(), // Useful to filter users during a search
                ...profileData
            }));
            const profile = result.profile;
            return database.ref(`users/${uid}/profile`)
                .push(profile);
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
    };
};