import { FC, ReactNode } from 'react';

export interface DialogState {
  // initialComponent?: ReactNode;
  children?: ReactNode;
  props: any;
  component: React.FC<any> | null;
}

export interface UseDialogContext {
  showDialog: <T extends object>(component: React.FC<T>, props: T) => void;
  hideDialog: () => void;
  destroyDialog: () => any;
}

export type UseDialogHook = DialogState & UseDialogContext;
