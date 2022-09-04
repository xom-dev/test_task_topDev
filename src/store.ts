import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

let store: Store;

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  // For Redux DevTools
  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

export { store };
