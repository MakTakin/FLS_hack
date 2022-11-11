import React, { FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface RedirectPageProps {
    message: string;
    path: string;
    linkText: string;
}

export const RedirectPage: FC<RedirectPageProps> = ({ message, path, linkText }) => (
    <Grid container py={5}>
        <Grid item xs={12} mb={2} textAlign="center">
            <Typography variant="h5">{message}</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
            <Grid item>
                <Link to={path}>
                    <Button variant="contained" size="small">
                        {linkText}
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Grid>
);

