import { Grid } from '@mui/material';
import React, { FC } from 'react';

export const Page404: FC = () => {
  const FONT_COLOR = '#c1cddb';
  return (
    <>
      <Grid
        fontSize="150px"
        textAlign="center"
        width="100%"
        mt={5}
        fontWeight="bold"
        sx={{
          color: FONT_COLOR,
        }}
      >
        404
      </Grid>
      <Grid
        fontSize="30px"
        textAlign="center"
        width="100%"
        ml={1}
        sx={{
          color: FONT_COLOR,
          textTransform: 'uppercase',
        }}
      >
        Page not found
      </Grid>
    </>
  );
};
