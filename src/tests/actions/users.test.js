import { createUserWithEmailAndPassword } from '../../actions/users';
import users from '../fixtures/users';

test('should setup create user with email and password', () => {
    const action = createUserWithEmailAndPassword(users[0]);
    expect(action).toEqual({
        type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
        user: users[0]
    });
});