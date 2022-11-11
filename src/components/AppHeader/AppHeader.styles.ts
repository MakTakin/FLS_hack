import { Tab, Button, Theme, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BrandImageContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  img: {
    width: '40px',
  },
});
export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }: { theme: Theme }) => theme?.palette.secondary.main};
  // background-color: #e5d4ab;
`;

export const ExitButton = styled(Button)`
  min-width: 40px;
  padding: 5px;
`;
