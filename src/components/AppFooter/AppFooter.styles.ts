import { lighten, styled } from '@mui/material/styles';

export const Footer = styled('div')(({ theme }) => ({
  padding: '0 10px',
  fontSize: '12px',
  color: lighten(theme.palette.text.primary, 0.5),
}));
