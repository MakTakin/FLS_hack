import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Typography,
  Tooltip,
  useTheme,
} from '@mui/material';
import React, { FC, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Select } from '../../../components/Select/Select';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import DnsIcon from '@mui/icons-material/Dns';

import {
  GridItem,
  LinkToBack,
  StyledTypography,
  EnvironmentTierItem,
  StyledSpan,
  InfoTier,
  TierCost,
  ButtonContainer,
  Capacity,
  StyledLabel,
  StyledCheckbox,
  StyledRequiredTypography,
} from './DashboardItem.styles';
import { Button } from '../../../../components/Buttons/Button';
import { success } from '../../../../components/notify/Notify';
import { configTiers } from '../ConfigItems';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { lighten, setSaturation } from 'polished';

const selectOptions = [
  {
    value: 1,
    label: 'IQVIA P+',
  },
  { value: 2, label: 'SynPUF 2.3' },
  { value: 3, label: 'Synthea' },
  { value: 4, label: 'synPUF' },
  { value: 5, label: 'test Data set' },
  { value: 6, label: 'test 1.0' },
];

const availableTools = ['ATLAS', 'ACHILLES', 'R-Shiny', 'HADES', 'R Studio', 'Python'];
const availableDataSets = [
  { id: 1, checked: false, label: 'IQVIA P+' },
  { id: 2, checked: false, label: 'SynPUF 2.3' },
  { id: 3, checked: false, label: 'Synthea' },
];

export const DashboardItem: FC = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [item] = configTiers.filter(tier => tier.id == id);
  const [dataSets, setDataSets] = useState(availableDataSets);
  const [disableLaunch, setDisableLaunch] = useState(true);

  const handleCheck = id => {
    const data = [...dataSets].map(dataSet =>
      dataSet.id === id ? { ...dataSet, checked: !dataSet.checked } : dataSet
    );
    const check = data.find(dataset => dataset.checked)
      ? setDisableLaunch(false)
      : setDisableLaunch(true);

    setDataSets(data);
  };

  const tools = availableTools.map((tool, index) => {
    return <StyledLabel key={index} control={<StyledCheckbox checked />} label={tool} />;
  });
  const renderDataSets = useMemo(
    () =>
      dataSets.map(dataSet => {
        return (
          <StyledLabel
            key={dataSet.id}
            control={
              <StyledCheckbox checked={dataSet.checked} onClick={() => handleCheck(dataSet.id)} />
            }
            label={dataSet.label}
          />
        );
      }),
    [dataSets]
  );

  return (
    <>
      <Grid>
        <LinkToBack to={'/dashboard'}>Back to dashboard</LinkToBack>
      </Grid>
      <Grid xs={12} mb={2} item textAlign="center">
        <StyledTypography variant="h4">Dashboard Environment</StyledTypography>
      </Grid>

      <Grid container justifyContent="center">
        <GridItem item xs={10}>
          <EnvironmentTierItem>
            <StyledTypography variant="h5" color={item.color}>
              {item.tier}
            </StyledTypography>
            <InfoTier>
              <div>
                Cost:<StyledSpan>{item.cost}</StyledSpan>
              </div>
              <Capacity>
                Approximate Capacity:<StyledSpan>{item.capacity}</StyledSpan>
                <Tooltip
                  title={'info about it'}
                  color="primary"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: setSaturation(
                          0.3,
                          lighten(0.25, theme.palette.text.primary)
                        ),
                        boxShadow: theme.shadows[3],
                        fontSize: 13,
                        px: 1.5,
                        py: 1,
                      },
                    },
                    arrow: {
                      sx: {
                        color: setSaturation(0.3, lighten(0.25, theme.palette.text.primary)),
                      },
                    },
                  }}
                >
                  <HelpOutlineIcon
                    sx={{
                      color: '#6c7c85',
                      ml: 1,
                      '&:hover': { cursor: 'pointer' },
                    }}
                  />
                </Tooltip>
              </Capacity>
            </InfoTier>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Environment specifications:
            </Typography>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <Typography variant="h6" fontSize="18px" sx={{ fontWeight: 'bold', mb: 1 }}>
                Tools to be deploy:
              </Typography>
              <FormGroup sx={{ flexDirection: 'row' }}>{tools}</FormGroup>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <StyledRequiredTypography variant="h6">Data Sets:</StyledRequiredTypography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                {/*<Select*/}
                {/*  options={selectOptions}*/}
                {/*  multiple*/}
                {/*  name="dataSet"*/}
                {/*  placeholder="Select data set..."*/}
                {/*  size="small"*/}
                {/*/>*/}
                <FormGroup sx={{ flexDirection: 'row' }}>{renderDataSets}</FormGroup>
              </div>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <Typography variant="h6" fontSize="18px" sx={{ fontWeight: 'bold', mb: 1 }}>
                Instance Specifications:
              </Typography>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid black',
                    borderRadius: '4px',
                    padding: '4px 12px',
                    backgroundColor: 'white',
                    marginRight: '24px',
                  }}
                >
                  <StorageIcon sx={{ mr: 1 }} /> vCPU:{' '}
                  <StyledSpan margin={8}>{item.cpu} Core</StyledSpan>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid black',
                    borderRadius: '4px',
                    padding: '4px 12px',
                    backgroundColor: 'white',
                    marginRight: '24px',
                  }}
                >
                  <MemoryIcon sx={{ mr: 1 }} /> Memory:
                  <StyledSpan margin={8}>{item.memory} Gb</StyledSpan>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid black',
                    borderRadius: '4px',
                    padding: '4px 12px',
                    backgroundColor: 'white',
                  }}
                >
                  <DnsIcon sx={{ mr: 1 }} /> Storage:{' '}
                  <StyledSpan margin={8}>{item.storage} Gb</StyledSpan>
                </div>
              </div>
            </div>
            <ButtonContainer>
              {disableLaunch ? (
                <>
                  <Tooltip
                    title={'You have to choose data set'}
                    color="primary"
                    componentsProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: setSaturation(
                            0.3,
                            lighten(0.25, theme.palette.text.primary)
                          ),
                          boxShadow: theme.shadows[3],
                          fontSize: 13,
                          px: 1.5,
                          py: 1,
                        },
                      },
                      arrow: {
                        sx: {
                          color: setSaturation(0.3, lighten(0.25, theme.palette.text.primary)),
                        },
                      },
                    }}
                  >
                    <Link to={'/dashboard'}>
                      <Button
                        variant="contained"
                        size="small"
                        disabled={disableLaunch}
                        onClick={() => success('SILVER Environment was chosen')}
                      >
                        Launch
                      </Button>
                    </Link>
                  </Tooltip>
                </>
              ) : (
                <Link to={'/dashboard'}>
                  <Button
                    variant="contained"
                    size="small"
                    disabled={disableLaunch}
                    onClick={() => success('SILVER Environment was chosen')}
                  >
                    Launch
                  </Button>
                </Link>
              )}
            </ButtonContainer>
          </EnvironmentTierItem>
        </GridItem>
      </Grid>
    </>
  );
};
