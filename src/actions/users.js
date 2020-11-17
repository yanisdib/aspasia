import { firebase, database } from '../firebase/firebase';

export const createUserWithEmailAndPassword = (user) => ({
    type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
    user
});

export const startCreateUserWithEmailAndPassword = (userDefaultData = {}) => {
    return async (dispatch, getState) => {
        const creationTime = getState().auth.uid.metadata.a;
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
            isSuper = false,
            createdAt = creationTime ? creationTime : 0
        } = userDefaultData;
        const userData = { firstName, lastName, username, birthdate, country, city, email, password, isAdmin, isVerified, isSuper, createdAt };
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = getState().auth.uid;
            return database.ref('users').push(userData).then(() => {
                try {
                    dispatch(createUserWithEmailAndPassword({
                        id: user.uid,
                        ...userData
                    }));
                }
                catch (error) {
                    console.log(`${error.code}: ${error.message}`);
                };

            });
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
        console.log('User was successfully added!');
    };
};