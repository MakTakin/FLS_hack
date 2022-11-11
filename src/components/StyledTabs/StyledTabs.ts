import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTabs = styled(Tabs, {
  shouldForwardProp: prop => prop !== 'uppercase',
})<{ uppercase?: boolean }>(({ theme, uppercase }) => ({
  minHeight: 34,
  marginBottom: -1,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '+ .MuiPaper-root': {
    borderTopLeftRadius: 0,
  },
  '.MuiTab-root': {
    textTransform: uppercase ? 'uppercase' : 'none',
  },
  '.MuiTabScrollButton-root': {
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
    },
    '&:last-of-type': {
      borderTopRightRadius: theme.shape.borderRadius,
    },
    '&.Mui-disabled': {
      opacity: 1,
      cursor: 'not-allowed',
      color: theme.palette.grey[500],
    },
    backgroundColor: theme.palette.offWhite.main,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

export const StyledTab = styled(Tab, {
  shouldForwardProp: prop => prop !== 'inverse' && prop !== 'dense',
})<{ inverse?: boolean; dense?: boolean }>(({ theme, inverse, dense }) => ({
  flexDirection: 'row',
  marginRight: 2,
  minHeight: 34,
  // marginBottom: -1,
  minWidth: 100,
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  alignItems: 'center',
  ...(dense && { padding: '8px 12px' }),
  ...(inverse
    ? {
        backgroundColor: theme.palette.background.paper,
        '&.Mui-selected': {
          borderBottom: 'none',
          backgroundColor: theme.palette.offWhite.main,
        },
      }
    : {
        backgroundColor: theme.palette.offWhite.main,
        '&.Mui-selected': {
          borderBottom: 'none',
          backgroundColor: theme.palette.background.paper,
        },
      }),
}));
