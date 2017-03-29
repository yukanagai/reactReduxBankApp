import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;