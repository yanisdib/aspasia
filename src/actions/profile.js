import { database } from '../firebase/firebase';

export const getUserProfile = (profile) => {
    return {
        type: 'GET_USER_PROFILE',
        profile
    };
};
/**
 * 
 * @param {username of the profile's user} user 
 * @returns action 'GET_USER_PROFILE'
 */
export const startGetUserProfile = (user) => {
    return (dispatch) => {
        try {
            return database.ref(`users`).orderByChild('username').equalTo(user).on('value', snapshot => {
                let data = {};
                snapshot.forEach(child => {
                    data = child.val();
                })
                const { birthdate, city, country, createdAt, firstName, hasProfile, isSuper, isVerified, lastName, profile, username } = data;
                const visibleData = { birthdate, city, country, createdAt, firstName, hasProfile, isSuper, isVerified, lastName, profile, username };
                dispatch(getUserProfile(visibleData));
            });
        }
        catch (error) {
            console.log(`${error.code}: ${error.message}`);
        };
    };
};