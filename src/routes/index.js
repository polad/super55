import CoreLayout from './components/App';

// create routes based on store
// we use rest spread, because we also pass http client as second argument
export const createRoutes = () => ({
  path: '/',
  component: CoreLayout,
});

export default createRoutes;
