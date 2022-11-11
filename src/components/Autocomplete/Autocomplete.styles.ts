import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten } from '@mui/material/styles';
import { darken, transparentize } from 'polished';

export const StyledAutocomplete = styled(Autocomplete)`
  &.MuiAutocomplete-root .Mui-disabled {
    &.MuiOutlinedInput-root {
      background-color: ${({ theme }) => darken(0.02, theme.palette.offWhite.main)};
    }
  }
  &.MuiInput-root.MuiInput-underline {
    margin-top: 0;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
    right: 3px;
    line-height: 26px;
    .MuiIconButton-root {
      width: 25px;
      height: 25px;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    top: 0;
  }
  &.MuiAutocomplete-root .MuiOutlinedInput-root {
    padding: 0 40px 0 2px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.palette.borderColor};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    background-color: #fff;
    font-size: 14px;
    color: ${({ theme }) => darken(0.02, theme.palette.grey[600])};
  }
  & .Mui-error.MuiOutlinedInput-root {
    border: 1px solid ${({ theme }) => transparentize(0.5, theme.palette.error.main)};
    box-shadow: inset 0px 0px 4px 1px
      ${({ theme }) => transparentize(0.6, theme.palette.error.main)};
  }

  &.Mui-focused {
    box-shadow: 0px 0px 2px 2px ${({ theme }) => lighten(theme.palette.text.primary, 0.9)};
    transition: box-shadow 200ms ease-in-out;
  }
`;

export const ListBox = styled('ul')(
  ({ theme }) => `
  minWidth: 150px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #ffffff;
  overflow: auto;
  max-height: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);
