import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root.reducer.js';

export default function configureStore() {
  const store = createStore(rootReducer,
    {
      tickets: {tickets: []},
    },
    applyMiddleware(thunk, logger));
  return store;
}
