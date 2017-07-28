import React from 'react';
import Popover from 'material-ui/Popover';
import List from 'material-ui/List/List';

const SuggestionsContainer = (anchorEl) => ({ containerProps, children }) => {
  const { ref, ...restContainerProps } = containerProps;
  const callRef = (popover) => {
    if (popover !== null) {
      ref(popover);
    }
  };

  if (!anchorEl) {
    return null;
  }

  return (
    <Popover
      ref={callRef}
      open={!!children}
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      canAutoPosition={false}
      {...restContainerProps}
    >
      <List>
        {children}
      </List>
    </Popover>
  );
};

export default SuggestionsContainer;
