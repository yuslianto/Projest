import { combineReducers } from 'redux';

import nav from './nav';
import paymentReducer from './payment';
import usersReducer from './users';

const reducers = combineReducers({
  nav,
  paymentReducer,
  usersReducer,
});

export default reducers;