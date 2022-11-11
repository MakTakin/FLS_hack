import { Container, Grid, Toolbar } from '@mui/material';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppFooter } from '../AppFooter/AppFooter';
import AppHeader from '../../containers/AppHeaderContainer';

export const LayoutApp: FC = () => {

  return (
    <>
      <AppHeader />
      <Container maxWidth={false} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ overflowY: 'auto', minHeight: '100vh', marginBottom: -3 }}>
          <Toolbar variant="dense" />
          <Grid container px={2} mt={3}>
            <Outlet />
          </Grid>
        </Container>
      </Container>
      <AppFooter />
    </>
  );
};
