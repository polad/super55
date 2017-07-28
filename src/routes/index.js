import CoreLayout from './CoreLayout';
import SearchBarForm from './SearchBarForm';

// create routes based on store
// we use rest spread, because we also pass http client as second argument
export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  childRoutes: [
    SearchBarForm(store)
  ],
});

export default createRoutes;
