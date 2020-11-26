import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { getCities } from '../../actions/cities';
import cities from '../fixtures/cities';

const createMockStore = configureMockStore([thunk]);
const initialState = {};

test('should setup cities', () => {
    const action = getCities(cities[0]);
    expect(action).toEqual({
        type: 'GET_CITIES',
        cities: cities[0]
    });
});