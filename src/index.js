import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { default as Web3 } from 'web3';

if (typeof window.web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

// Layouts
import App from './App'
import HomeContainer from './containers/HomeContainer';
import RegisterManufacturerContainer from './containers/RegisterManufacturerContainer';
import RegisterAuditorContainer from './containers/RegisterAuditorContainer';
import RegisterOrganContainer from './containers/RegisterOrganContainer';
import DashboardContainer from './containers/DashboardContainer.jsx';
import ApplyContainer from './containers/ApplyContainer.jsx';

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
          <Route path="dashboard" component={DashboardContainer} />
          <Route path="apply" component={ApplyContainer} />
          
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
