import { firebase, database } from '../firebase/firebase';

export const createUserWithEmailAndPassword = (user) => ({
    type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
    user
});


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
            await database.ref('users')
                .push(userData);
            await dispatch(createUserWithEmailAndPassword({
                id: user.uid,
                createdAt: createdAt,
                ...userData
            }));
            console.log('User was successfully added!');
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
    };
};