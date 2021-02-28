import usersReducer from '../../reducers/users';
import users from '../fixtures/users';

test('should set default state', () => {
    const state = usersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should create user with email and password', () => {
    const user = {
        firstName: 'Jean',
        lastName: 'Dupont',
        username: 'jeandupont',
        birthdate: 9101993,
        email: 'jeandupont@gmail.com',
        password: 'abcdefg',
        isAdmin: true,
        isVerified: true,
        isSuper: true,
        createdAt: 4505557
    };
    const action = {
        type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
        user: user
    };
    const state = usersReducer(users, action);
    expect(state).toEqual([...users, user]);
});