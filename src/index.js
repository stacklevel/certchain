import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import HomeContainer from './containers/HomeContainer';
import RegisterManufacturerContainer from './containers/RegisterManufacturerContainer';
import RegisterAuditorContainer from './containers/RegisterAuditorContainer';
import RegisterOrganContainer from './containers/RegisterOrganContainer';

// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
          <Route path="register-manufacturer" component={RegisterManufacturerContainer} /> 
          <Route path="register-auditor" component={RegisterAuditorContainer} /> 
          <Route path="register-organ" component={RegisterOrganContainer} />   
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
