import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './modules';

export default function configureStore(history, initialState = {}) {
  const router = routerMiddleware(history);

  // middleware list
  let middleware = applyMiddleware(
    router,
  );

  // add devtools extension if it's present
  middleware = compose(
    middleware,
    global.devToolsExtension ? global.devToolsExtension() : f => f
  );

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(rootReducer(), initialState, middleware);
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
