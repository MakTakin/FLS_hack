import { InputBase } from '@mui/material';
import { styled, lighten } from '@mui/material/styles';
import { darken, transparentize } from 'polished';

export const StyledInputBase = styled(InputBase)`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: #fff;
  &.Mui-disabled {
    background-color: ${({ theme }) => darken(0.02, theme.palette.offWhite.main)};
  }
  .MuiInputBase-input {
    padding: 4px 10px;
    height: ${({ size }) => (size === 'medium' ? 30 : 22)}px;
    font-size: ${({ size }) => (size === 'medium' ? 24 : 18)}px;
  }
  &.Mui-error {
    border: 1px solid ${({ theme }) => transparentize(0.5, theme.palette.error.main)};
    box-shadow: inset 0px 0px 4px 1px
      ${({ theme }) => transparentize(0.6, theme.palette.error.main)};
  }
  &.Mui-focused {
    box-shadow: 0px 0px 2px 2px ${({ theme }) => lighten(theme.palette.text.primary, 0.9)};
    transition: box-shadow 200ms ease-in-out;
  }
`;
