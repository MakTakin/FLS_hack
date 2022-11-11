import React, { FC } from 'react';
import { Card, CardProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const StyledCard: FC<CardProps> = props => {
  const theme = useTheme();

  return (
    <Card
      {...props}
      variant="outlined"
      sx={{ backgroundColor: theme.palette.offWhite.main, ...props.sx }}
    >
      {props.children}
    </Card>
  );
};
