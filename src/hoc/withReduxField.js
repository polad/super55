import React from 'react';
import Field from 'redux-form/es/Field';

// wraps SearchBar with Field from Redux Form
export default (component) => (props) => (
  <Field {...props} component={component} />
);
