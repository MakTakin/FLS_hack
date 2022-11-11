import React from 'react';
import { FormControl as MUIFormControl, FormControlProps } from '@mui/material';

export const FormControl = ({
  minLabelWidth,
  inline,
  ...props
}: FormControlProps & { inline?: boolean; minLabelWidth?: number }) => (
  <MUIFormControl
    {...props}
    sx={{
      marginBottom: 1,
      ...(inline && {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        label: {
          whiteSpace: 'nowrap',
          mr: 1,
          minWidth: minLabelWidth || 'auto',
        },
      }),
    }}
    variant="standard"
  />
);
