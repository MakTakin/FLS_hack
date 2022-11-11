import React, { FC } from 'react';
import { Grid } from '@mui/material';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

export const Unauthorized: FC = () => {
  const FONT_COLOR = '#c1cddb';
  return (
    <>
      <Grid textAlign="center" width="100%" mt={5} fontWeight="bold">
        <NotInterestedIcon
          sx={theme => ({
            color: FONT_COLOR,
            textShadow: '10px 10px 4px rgb(12 35 64 / 44%)',
            fontSize: 150,
          })}
        />
      </Grid>
      <Grid
        fontSize="30px"
        textAlign="center"
        width="100%"
        ml={1}
        sx={theme => ({
          color: FONT_COLOR,
          //   textTransform: 'uppercase',
          // textShadow: '6px 7px 4px rgb(12 35 64 / 44%)',
        })}
      >
        Unauthorized
      </Grid>
      <Grid
        fontSize="30px"
        textAlign="center"
        width="100%"
        ml={1}
        mt={1}
        sx={theme => ({
          color: FONT_COLOR,
          //   textTransform: 'uppercase',
          // textShadow: '6px 7px 4px rgb(12 35 64 / 44%)',
        })}
      >
        Go to login <a href="/login">page</a>
      </Grid>
    </>
  );
};
