import React, { FC, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { SmallButton, StyledInput } from './EditableField.styles';

interface EditableFieldProps {
  value: any;
  handleChange: (value: string) => void;
  isDisabled: boolean;
  fontSize?: number;
  fontSizeEdit?: number;
}
export const EditableField: FC<EditableFieldProps> = ({
  value,
  handleChange,
  isDisabled,
  fontSize = 16,
  fontSizeEdit,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(value);

  const onSubmit = () => {
    if (handleChange) handleChange(title);
    setEditMode(false);
  };

  const onCancel = () => {
    setTitle(value);
    setEditMode(false);
  };

  useEffect(() => {
    setTitle(value);
    return () => {
      setEditMode(false);
    };
  }, [value]);

  return (
    <>
      <Grid item container display="flex" flexWrap="nowrap" alignItems="center">
        {editMode ? (
          <StyledInput
            size="small"
            value={title}
            onChange={e => setTitle(e.target.value)}
            sx={{
              width: '100%',
              fontSize: fontSizeEdit ? fontSizeEdit : 15.9,
            }}
          />
        ) : (
          <Grid
            item
            sx={{
              fontSize,
              marginRight: 1,
              whiteSpace: 'nowrap',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Grid>
        )}
        <Grid item flexWrap="nowrap" container width={editMode ? '60px' : '30px'}>
          {editMode ? (
            <>
              <SmallButton
                size="small"
                disabled={!title}
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
            </>
          ) : isDisabled ? (
            <></>
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
        </Grid>
      </Grid>
    </>
  );
};
