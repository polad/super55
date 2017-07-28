import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as dictionary } from './dictionary';

export const reducers = (asyncReducers) => {
  return combineReducers({
    router,
    dictionary,
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(reducers(store.asyncReducers));
};

export default reducers;
