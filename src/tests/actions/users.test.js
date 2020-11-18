import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createUserWithEmailAndPassword, startCreateUserWithEmailAndPassword } from '../../actions/users';
import { database } from '../../firebase/firebase';
import users from '../fixtures/users';

const uid = 'SAHxE5RuehQS1C92MsaiLNzpiAY2';
const defaultAuthState = { auth: { uid: { uid, metadata: { a: '1233455' } } } };
const createMockStore = configureMockStore([thunk]);

test('should setup create user with email and password', () => {
    const action = createUserWithEmailAndPassword(users[0]);
    expect(action).toEqual({
        type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
        user: users[0]
    });
});

test('should add user to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const userData = {
        firstName: 'Yanis',
        lastName: 'Dib',
        username: 'yanisdib',
        birthdate: 9101993,
        country: 'France',
        city: 'Toulon',
        email: '154dde7p@gmail.com',
        password: 'abcdefg',
        isAdmin: true,
        isVerified: true,
        isSuper: true
    };
    store.dispatch(startCreateUserWithEmailAndPassword(userData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
                user: {
                    id: expect.any(String),
                    createdAt: expect.any(String),
                    ...userData
                }
            });

            return database.ref('users').once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(userData);
            done();
        });
});