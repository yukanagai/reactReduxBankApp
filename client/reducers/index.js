import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import balance from './updateBalance.js';
import modalType from './modal.js';

const rootReducer = combineReducers({
	balance,
	modalType,
	routing: routerReducer
});

export default rootReducer;