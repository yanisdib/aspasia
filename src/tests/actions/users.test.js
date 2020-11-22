import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createUserWithEmailAndPassword, startCreateUserWithEmailAndPassword } from '../../actions/users';
import { database } from '../../firebase/firebase';
import users from '../fixtures/users';

const uid = 'SAHxE5RuehQS1C92MsaiLNzpiAY2';
const createMockStore = configureMockStore([thunk]);
const initialState = {};

test('should setup create user with email and password', () => {
    const action = createUserWithEmailAndPassword(users[0]);
    expect(action).toEqual({
        type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
        user: users[0]
    });
});


describe('createUserWithEmailAndPassword action', () => {
    const store = createMockStore(initialState);
    it('should add user to database and store', async (done) => {
        const userData = {
            firstName: 'Yanis',
            lastName: 'Dib',
            username: 'yanisdib',
            birthdate: 9101993,
            country: 'France',
            city: 'Toulon',
            email: 'test@gmail.com',
            password: 'abcdefg',
            isAdmin: true,
            isVerified: true,
            isSuper: true
        };
        store.dispatch(startCreateUserWithEmailAndPassword(userData)); 
        const actions = store.getActions();
        console.log(actions);
        expect(actions[0]).toEqual({
            type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
            user: {
                id: expect.any(String),
                createdAt: expect.any(String),
                ...userData
            }
        });
        return database.ref('users').one('value', function (snapshot){
            expect(snapshot.val()).toEqual(userData);
        });
    });
});