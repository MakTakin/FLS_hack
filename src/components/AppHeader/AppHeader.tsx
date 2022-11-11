import React, { FC, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Tabs, Toolbar, Grid, Tab } from '@mui/material';
import { StyledAppBar } from './AppHeader.styles';
import { Brand } from './Brand';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const AppHeader: FC<any> = props => {

  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = React.useState('/dashboard');

  const handleChange = (_: any, newTab: any) => {
    setTab(newTab);
  };

  useEffect(() => {
    setTab(`/${location.pathname.split('/')[1]}`);
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar variant="dense">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={1} md={3}>
              <Brand />
            </Grid>
            <Grid item>
              <Tabs
                value={tab}
                centered
                sx={{ fontSize: '1rem', '.MuiTabs-indicator': { backgroundColor: '#D41B2C' } }}
              >
                <Tab
                  component={Link}
                  label="Dashboard"
                  value="/dashboard"
                  to="/dashboard"
                  onClick={(e: any) => handleChange(e, '/dashboard')}
                  sx={theme => ({
                    color: '#99A3B0',
                    fontWeight: 600,
                    fontSize: '1rem',
                  })}
                />
                <Tab
                  component={Link}
                  to="/environments"
                  label="My environments"
                  value="/environments"
                  onClick={(e: any) => handleChange(e, '/environments')}
                  sx={theme => ({
                    color: '#99A3B0',
                    fontWeight: 600,
                    fontSize: '1rem',
                  })}
                />
                <Tab
                  component={Link}
                  to="/budget"
                  label="Budget"
                  value="/budget"
                  onClick={(e: any) => handleChange(e, '/budget')}
                  sx={theme => ({
                    color: '#99A3B0',
                    fontWeight: 600,
                    fontSize: '1rem',
                  })}
                />
                <Tab
                  component={Link}
                  to="/support"
                  label="Support"
                  value="/support"
                  onClick={(e: any) => handleChange(e, '/support')}
                  sx={theme => ({
                    color: '#99A3B0',
                    fontWeight: 600,
                    fontSize: '1rem',
                  })}
                />

              </Tabs>
            </Grid>
            <Grid
              item
              container
              xs={3}
              sm={3}
              alignItems="center"
              justifyContent="flex-end"
              // sx={{ color: 'white' }}
            >
              <div
                style={{
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                }}
              >
                <AccountBalanceWalletIcon sx={{ mr: 0.5 }} /> Balance:{' '}
                <span
                  style={{
                    // fontWeight: 'normal',
                    marginLeft: '4px',
                  }}
                >
                  150 units
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <AccountCircleIcon sx={{ mr: 0.5 }} /> Smith J.
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};
