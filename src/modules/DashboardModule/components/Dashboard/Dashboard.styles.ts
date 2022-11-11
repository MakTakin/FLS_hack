import { styled, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const GridItem = styled(Grid)`
  text-align: center;
  align-items: center;
  padding: 10px;
  // &:hover {
  //   color: ${({ theme }) => theme.palette.grey[700]};
  // }
`;

export const EnvironmentTier = styled('div')`
  height: 100%;
  padding: 20px 20px;
  text-align: center;
  background-color: ${({ theme }) => '#f6f7fd'};
  border: ${({ theme }) => `1px solid  ${theme.palette.borderColor}`};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.22);
  transition: all 0.2s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`;
export const EnvironmentTierItem = styled('div')`
  height: 100%;
  padding: 20px 20px;
  text-align: center;
  background-color: ${({ theme }) => '#f6f7fd'};
  border: ${({ theme }) => `1px solid  ${theme.palette.borderColor}`};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.22);
`;

export const StyledTypography = styled(Typography)`
  font-weight: bold;
  color: ${({ color }) => (color ? color : 'black')};
`;

export const InfoTier = styled('div')`
  text-align: left;
  margin-bottom: 40px;
`;

export const StyledSpan = styled('span')`
  font-weight: bold;
  margin-left: 4px;
`;

export const TierCost = styled('div')`
  font-weight: bold;
  font-size: 60px;
`;

export const ButtonContainer = styled('div')`
  margin-top: auto;
`;

export const TierInfo = styled('p')`
  font-style: italic;
  text-align: left;
`;

export const Capacity = styled('div')`
  display: flex;
  align-items: center;
`;
