import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';


// import storage_artifacts from '../../build/contracts/SimpleStorage.json';

// const SimpleStorage = contract(storage_artifacts);

const initialState = {
  data: null,
}

if (typeof window.web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// SimpleStorage.setProvider(window.web3.currentProvider);

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      data: null
    })
  }

  if (action.type === 'SIMPLE_STORAGE_TEST')
  {
    let simpleStorageInstance;

    // return SimpleStorage.deployed().then(function(instance) {
    //   simpleStorageInstance = instance;
  
    //   return simpleStorageInstance.set(action.payload, { from: window.web3.eth.accounts[0]});
    // }).then(function() {
    //   return simpleStorageInstance.get.call();
    // }).then(function(storedData) {
    //   console.log(storedData);
    // });
  }

  return state
}

export default userReducer
