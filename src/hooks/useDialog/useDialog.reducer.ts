import produce from 'immer';
import { DialogState } from '.';
import { Action } from '../../interfaces';
import { DialogActions } from './useDialog.constants';

export const reducer = (initialState: DialogState, action: Action) => {
  return produce(initialState, (draft: DialogState) => {
    switch (action.type) {
      case DialogActions.SHOW_DIALOG: {
        draft.component = action.payload.component;
        draft.props = { ...action.payload.props, open: true };
        break;
      }
      case DialogActions.HIDE_DIALOG: {
        draft.props = { ...draft.props, open: false };
        break;
      }
      case DialogActions.DESTROY_DIALOG: {
        draft.component = null;
        draft.props = {};
        break;
      }
    }
  });
};
