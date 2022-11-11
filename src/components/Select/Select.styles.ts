import { Box, MenuItem, Select } from '@mui/material';
import { styled, lighten } from '@mui/material/styles';
import { darken, transparentize } from 'polished';

export const StyledSelect = styled(Select)`
  width: 450px;
  border: 1px solid #d41b2c;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: transparent;
  // &.Mui-disabled {
  //   background-color: ${({ theme }) => darken(0.02, theme.palette.offWhite.main)};
  // }
  // &.MuiInput-root.MuiInput-underline {
  //   margin-top: 0;
  // }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiInputBase-input {
    padding: 4px 10px;
    height: 20px;
    font-size: 16px;
    color: black;
  }
  &.Mui-error {
    border: 1px solid ${({ theme }) => transparentize(0.5, theme.palette.error.main)};
    box-shadow: inset 0px 0px 4px 1px
      ${({ theme }) => transparentize(0.6, theme.palette.error.main)};
  }
  // &.Mui-focused {
  //   box-shadow: 0px 0px 2px 2px ${({ theme }) => lighten(theme.palette.text.primary, 0.9)};
  //   transition: box-shadow 200ms ease-in-out;
  // }
`;

export const Placeholder = styled('span')`
  color: black;
`;

export const SelectPlaceholder = styled(Box)(({ theme }) => ({
  pointerEvents: 'none',
  px: 2,
  color: 'black',
  fontSize: 14,
  textAlign: 'center',
}));

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 450px;
  }
  &.MuiMenuItem-root:hover {
    background-color: #f7c1c1;
  }
  &.Mui-focusVisible {
    background-color: transparent;
  }
  &.Mui-selected.Mui-focusVisible {
    background-color: #f8a8a8;
  }
  &.Mui-selected {
    background-color: #f8a8a8;
  }
`;
