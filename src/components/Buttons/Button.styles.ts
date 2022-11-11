import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)`
  font-weight: bold;
  background-color: white;
  color: black;
  border: 1px solid #d41b2c;
  &:hover {
    background-color: #d41b2c;
    color: white;
  }
  &:disabled {
    border: 1px solid #00000042;
  }
`;
