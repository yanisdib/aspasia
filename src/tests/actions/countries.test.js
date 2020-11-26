import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { getCountries } from '../../actions/countries';
import countries from '../fixtures/countries';

const createMockStore = configureMockStore([thunk]);
const initialState = {};

test('should setup countries', () => {
    const action = getCountries(countries[0]);
    expect(action).toEqual({
        type: 'GET_COUNTRIES',
        countries: countries[0]
    });
});