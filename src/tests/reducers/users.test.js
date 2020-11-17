import usersReducer from '../../reducers/users';
import users from '../fixtures/users';

test('should set default state', () => {
    const state = usersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should create user with email and password', () => {
    const action = {
        type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
        user: users[0]
    };
    const state = usersReducer(users, action);
    expect(state).toEqual([users[0]]);
});