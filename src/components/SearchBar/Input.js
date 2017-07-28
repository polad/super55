import React from 'react';
import TextField from 'material-ui/TextField';

export const Input = (props) => {
  const { input, name, ...rest } = props;
  const { onChange, ...restInput } = input; // eslint-disable-line no-unused-vars

  return (
    <TextField
      id={name}
      floatingLabelFixed
      {...restInput}
      {...rest}
    />
  );
}

export default Input;
