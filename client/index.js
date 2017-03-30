import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App.js';
import HomePage from './containers/HomePage.js';
import ModalRoot from './components/ModalRoot.js';

import store, { history } from './store/store.js';

const router = (
	<Provider store={store}>
		<Router history={history}>
	    <Route path='/' component={App}>
	    	<IndexRoute component={HomePage}/>
	    	<Route path='/modal/:modalType' component={ModalRoot}/>
	    </Route>
	  </Router>
	 </Provider>
);

render(router, document.getElementById('root'));