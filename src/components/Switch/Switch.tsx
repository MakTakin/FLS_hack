import React, { FC } from 'react';
import { Switch as MUISwitch, SwitchProps } from '@mui/material';

export const Switch: FC<SwitchProps> = props => {
  return (
    <MUISwitch
      {...props}
      size="small"
      sx={{
        padding: 0.25,
        '.MuiSwitch-track': { borderRadius: 3 },
        '.MuiSwitch-thumb': { boxShadow: 'none' },
        ...props.sx,
      }}
    />
  );
};
