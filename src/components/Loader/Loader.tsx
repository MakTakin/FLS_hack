import React, { FC } from 'react';
import { CircularProgress, LinearProgress, Grid } from '@mui/material';

export interface LoaderProps {
  message?: string;
  type?: 'linear' | 'circular';
  size?: number | string;
}
export const Loader: FC<LoaderProps> = ({ message = 'Loading...', type = 'linear', size = 80 }) => {
  return (
    <Grid container textAlign="center" mt={2}>
      <Grid item xs={12}>
        {type === 'linear' ? <LinearProgress /> : <CircularProgress size={size} />}
      </Grid>
      <Grid item xs={12} mt={2}>
        {message}
      </Grid>
    </Grid>
  );
};
