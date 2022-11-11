import { TextareaAutosize, styled } from '@mui/material';

export const StyledTextArea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  border: 1px solid ${theme.palette.borderColor};
  padding: 4px 60px 6px 10px;
  border-radius: ${theme.shape.borderRadius}px;
  resize: none;
  &::placeholder {
    // font-weight: 400; do we need this???
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: transparent;
    font-weight: 600; // not sure it's good idea, but let's stick with this for now
    color: ${theme.palette.text.primary};
    border: none;
    padding-left: 0;
  }
`
);

export const TextAreaContainer = styled('div')`
  position: relative;
`;
export const TextAreaButtonsContainer = styled('div')`
  position: absolute;
  right: 2px;
  top: 2px;
`;
