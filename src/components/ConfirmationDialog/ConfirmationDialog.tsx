import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { ClickAwayListener } from '@mui/material';

export interface ConfirmationDialogProps {
  onDecline?: () => void;
  onSubmit?: () => void;
  onClose: () => void;
  text?: string;
  open?: boolean;
  confirmButtonText?: string;
  cancelButtontext?: string;
  enableClickAway?: boolean;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = props => {
  const {
    onSubmit,
    onDecline,
    onClose,
    text,
    confirmButtonText,
    cancelButtontext,
    enableClickAway = false,
  } = props;
  return (
    <Dialog open={Boolean(props.open)}>
      <ClickAwayListener onClickAway={() => enableClickAway && onClose()}>
        <div>
          <DialogContent>
            <DialogContentText className="alert-dialog-description">
              {text || 'Are you sure you want to delete this item?'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                onDecline && onDecline();
                onClose && onClose();
              }}
              size="small"
              variant="outlined"
            >
              {cancelButtontext || 'CANCEL'}
            </Button>
            <Button
              onClick={() => {
                onSubmit && onSubmit();
                onClose && onClose();
              }}
              size="small"
              variant="contained"
            >
              {confirmButtonText || 'CONFIRM'}
            </Button>
          </DialogActions>
        </div>
      </ClickAwayListener>
    </Dialog>
  );
};
