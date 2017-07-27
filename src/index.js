import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from 'react-router/lib/Router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';
import createHistory from 'history/lib/createBrowserHistory';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import createRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = useRouterHistory(createHistory)();
const store = configureStore(history);
const routes = createRoutes(store);

// enhance history
const syncedHistory = syncHistoryWithStore(history, store, {
  selectLocationState: state => state.router,
});

ReactDOM.render((
  <Provider store={store} key="provider">
    <MuiThemeProvider>
      <Router history={syncedHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
