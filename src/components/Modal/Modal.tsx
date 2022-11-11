import React, { FC } from 'react';
import { Fade, Modal as MUIModal, IconButton, Box, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { ModalContainer, StyledCardHeader, StyledHeader } from './Modal.styles';
import { getEnvironmentStatusIcon } from '../../utils/getStatusIcon';

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onCancel: () => void;
  width?: string;
  size?: number;
  action?: string;
}

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onCancel,
  action,
  size,
  children,
  width,
}) => {
  return (
    <MUIModal
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={isOpen} timeout={300}>
        <ModalContainer>
          <StyledHeader
            // style={{
            //   background:
            //     'linear-gradient(180deg, rgba(207,255,249,1) 0%, rgba(246,247,253,1) 100%)',
            //   borderBottom: '1px solid #ced4da',
            //   borderTopLeftRadius: '4px',
            //   borderTopRightRadius: '4px',
            //   paddingBottom: '16px',
            //   textAlign: 'center',
            //   marginBottom: '16px',
            //   height: '25vh',
            // }}
            color={action}
          >
            <StyledCardHeader
              action={
                <IconButton aria-label="close" size="small" onClick={onCancel}>
                  <Close fontSize="large" />
                </IconButton>
              }
              // title={title}
              // titleTypographyProps={{
              //   variant: 'h5',
              //   fontWeight: 'bold',
              // }}
            />
            {getEnvironmentStatusIcon(action, size)}
            <Typography variant="h5" sx={{ mt: 1.5 }}>
              {title}
            </Typography>
          </StyledHeader>
          <Box sx={{ height: '30vh' }}>{children}</Box>
        </ModalContainer>
      </Fade>
    </MUIModal>
  );
};
