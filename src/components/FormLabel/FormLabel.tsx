import React from 'react';
import { FormLabel as MUIFormLabel, FormLabelProps, useTheme } from '@mui/material';

export const FormLabel = ({ sx, ...props }: FormLabelProps) => {
  const theme = useTheme();
  return (
    <MUIFormLabel
      {...props}
      sx={{
        position: 'static',
        transform: 'none',
        marginBottom: 0.25,
        fontSize: '0.9rem',
        '.MuiFormLabel-asterisk': {
          color: theme.palette.error.main,
          fontWeight: 'bold',
        },
        ...sx,
      }}
    />
  );
};
