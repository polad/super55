import React from 'react';
import ListItem from 'material-ui/List/ListItem';

export const Suggestion = (suggestion) => (
  <ListItem primaryText={suggestion[0]} />
);

export default Suggestion;
