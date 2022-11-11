import { IconButton, styled, Input } from '@mui/material';

export const SmallButton = styled(IconButton)({
  padding: '2px',
});
export const StyledInput = styled(Input)({
  '&::before': {
    bottom: '-2px',
  },
  '&::after': {
    bottom: '-2px',
    borderBottomWidth: '1px',
  },
  '&.MuiInput-root:hover::before': {
    borderBottomWidth: '1px',
  },
  '.MuiInputBase-input': {
    paddingBottom: 0,
  },
});
