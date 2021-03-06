import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = Redux.applyMiddleware()(Redux.createStore);

ReactDOM.render(
  <ReactRedux.Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </ReactRedux.Provider>
  , document.querySelector('.container'));
  