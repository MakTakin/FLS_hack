import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { StyledAutocomplete } from './Autocomplete.styles';

export const Autocomplete: FC<any> = ({ error, ...props }) => {
  return (
    <StyledAutocomplete
      {...props}
      size="small"
      renderInput={params => (
        <TextField {...params} placeholder={props.placeholder} error={error} />
      )}
    />
  );
};
