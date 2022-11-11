import { Box, CardHeader, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStatusColor } from '../../utils/getStatusIcon';

export const ModalContainer = styled(Box, { shouldForwardProp: prop => prop !== 'width' })<{
  width?: string;
}>(({ theme, width }) => ({
  position: 'absolute',
  top: '20%',
  left: '30%',
  width: '40vw',
  minHeight: '55vh',
  maxWidth: '100%',
  backgroundColor: '#fff',
  borderRadius: '4px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const StyledCardHeader = styled(CardHeader)(() => ({
  paddingTop: 5,
  paddingBottom: 5,
  paddingRight: 10,
  paddingLeft: 15,
}));

export const StyledHeader = styled('div', { shouldForwardProp: prop => prop !== 'color' })<{
  color?: string;
}>(({ theme, color }) => ({
  // status ? getStatusColor(theme, status) : theme.palette.text.primary
  background: `linear-gradient(180deg, ${
    color ? getStatusColor(theme, color) : theme.palette.offWhite.contrastText
  } 0%, rgba(246,247,253,1) 100%)`,
  borderBottom: `1px solid ${theme.palette.borderColor}`,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  paddingBottom: '16px',
  textAlign: 'center',
  marginBottom: '16px',
  height: '25vh',
}));
