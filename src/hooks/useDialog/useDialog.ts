import React, { useReducer, useCallback, Reducer } from 'react';
import { DialogState, UseDialogHook } from '.';
import { Action } from '../../interfaces';
import { DialogActions } from './useDialog.constants';
import { reducer } from './useDialog.reducer';

const INITIAL_STATE = {
  component: null,
  props: {},
};

export const useDialog = (): UseDialogHook => {
  const [state, dispatch] = useReducer<Reducer<DialogState, Action>>(reducer, INITIAL_STATE);

  const showDialog = useCallback(
    <T extends object>(component: React.FC<T>, props: T) => {
      dispatch({
        type: DialogActions.SHOW_DIALOG,
        payload: { component, props },
      });
    },
    [dispatch]
  );

  const hideDialog = useCallback(() => {
    dispatch({
      type: DialogActions.HIDE_DIALOG,
    });
  }, [dispatch]);

  const destroyDialog = useCallback(() => {
    dispatch({
      type: DialogActions.DESTROY_DIALOG,
    });
  }, []);

  return { ...state, hideDialog, showDialog, destroyDialog };
};
