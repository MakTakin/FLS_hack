import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import {
  StyledTextArea,
  TextAreaContainer,
  TextAreaButtonsContainer,
} from './EditableTextArea.styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { SmallButton } from '../EditableField/EditableField.styles';

type EditableTextAreaProps = {
  maxRows?: number;
  minRows?: number;
  value?: string;
  placeholder?: string;
  handleChange?: (...args: any) => void;
  isDisabled?: boolean;
};

export const EditableTextArea: React.FC<EditableTextAreaProps> = props => {
  const { maxRows, minRows, value, placeholder, handleChange, isDisabled } = props;
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(value);

  const onSubmit = () => {
    if (handleChange) handleChange(description);
    setEditMode(false);
  };

  const onCancel = () => {
    setDescription(value);
    setEditMode(false);
  };

  useEffect(() => {
    setDescription(value);
    return () => {
      setEditMode(false);
    };
  }, [value]);
  return (
    <TextAreaContainer>
      <Grid
        item
        container
        display="flex"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
        minHeight={27}
      >
        <StyledTextArea
          value={description}
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
          maxRows={maxRows}
          minRows={minRows}
          disabled={!editMode}
          placeholder={placeholder}
        />
        <TextAreaButtonsContainer>
          {!isDisabled && (
            <>
              {editMode ? (
                <React.Fragment>
                  <SmallButton
                    size="small"
                    disabled={!description}
                    onClick={onSubmit}
                    sx={theme => ({
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    })}
                  >
                    <CheckIcon sx={{ fontSize: 20 }} />
                  </SmallButton>
                  <SmallButton
                    size="small"
                    onClick={onCancel}
                    sx={theme => ({
                      '&:hover': {
                        color: theme.palette.error.main,
                      },
                    })}
                  >
                    <CloseIcon sx={{ fontSize: 20 }} />
                  </SmallButton>
                </React.Fragment>
              ) : (
                <SmallButton
                  size="small"
                  onClick={() => setEditMode(true)}
                  sx={theme => ({
                    '&:hover': {
                      color: theme.palette.info.main,
                    },
                  })}
                >
                  <EditIcon sx={{ fontSize: 20 }} />
                </SmallButton>
              )}
            </>
          )}
        </TextAreaButtonsContainer>
      </Grid>
    </TextAreaContainer>
  );
};
