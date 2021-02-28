import moment from 'moment';
import { firebase, database } from '../firebase/firebase';

export const createUserWithEmailAndPassword = (user) => ({
  type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
  user,
});

/**
 * Create a user using Firebase Auth functions
 * @param {object} userDefaultData
 */
export const startCreateUserWithEmailAndPassword = (userDefaultData = {}) => {
  return async (dispatch) => {
    const {
      firstName = '',
      lastName = '',
      birthdate = 0,
      country = '',
      city = '',
      email = '',
      password = '',
      isAdmin = false,
      hasProfile = false,
      isVerified = false,
      isSuper = false,
    } = userDefaultData;
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password); // returns an object user
      const user = result.user;
      const uid = user.uid;
      const username = `user_${user.uid.substring(0, 8)}`;
      const createdAt = user.metadata.a ? user.metadata.a : 0; // Time when Firebase created the account
      const userData = {
        firstName,
        lastName,
        username,
        birthdate,
        country,
        city,
        email,
        password,
        isAdmin,
        hasProfile,
        isVerified,
        isSuper,
        createdAt,
      };
      const res = await dispatch(
        createUserWithEmailAndPassword({
          uid: uid,
          ...userData,
        })
      );
      return database.ref(`users/${uid}`).set(res.user);
    } catch (error) {
      console.log(`${error.code}: ${error.message}`);
    }
  };
};

export const createUserProfile = (profile) => {
  return {
    type: 'CREATE_USER_PROFILE',
    profile,
  };
};

/**
 * Create the current user's profile
 * @param {object} userDefaultData
 */
export const startCreateUserProfile = (profileDefaultData = {}) => {
  return async (dispatch, getState) => {
    const {
      status = '',
      gender = '',
      biography = '',
      education = '',
      job = '',
      canSpeak = [
        {
          language: '',
          proficiency: '',
        },
      ],
      isLearning = [
        {
          language: '',
          proficiency: '',
        },
      ],
      request = '',
      hobbies = '',
      favoriteMusic = [
        {
          music: '',
          comment: '',
        },
      ],
      favoriteMovies = [
        {
          movie: '',
          comment: '',
        },
      ],
      favoriteBooks = [
        {
          book: '',
          comment: '',
        },
      ],
      favoriteQuotes = [
        {
          text: '',
          author: '',
        },
      ],
      isLookingFor = [],
      pictures = [
        {
          url: '',
          alt: '',
          description: '',
          isProfile: false,
          isCover: false,
        },
      ],
      lastModifiedAt = moment.now(),
    } = profileDefaultData;

    try {
      const uid = getState().auth ? getState().auth : getState().user.id; // Current user ID
      const profileData = {
        status,
        gender,
        biography,
        education,
        job,
        canSpeak,
        isLearning,
        request,
        hobbies,
        favoriteMusic,
        favoriteMovies,
        favoriteBooks,
        favoriteQuotes,
        isLookingFor,
        pictures,
        lastModifiedAt
      };
      console.log(uid);
      database.ref(`users/${uid}/profile`).set(profileData);
      await database.ref(`users/${uid}/hasProfile`).set(true);
      return dispatch(createUserProfile(profileData));
    } catch (error) {
      console.log(`${error.code}: ${error.message}`);
    }
  };
};

export const getUser = (user) => ({
  type: 'GET_USER',
  user,
});

export const startGetUser = (uid) => {
  return async (dispatch) => {
    const res = await database.ref(`users/${uid}`);
    console.log(res);
    return dispatch(getUser());
  };
};
