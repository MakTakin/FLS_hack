import React, { createContext, ReactNode } from 'react';
import { useDialog } from './useDialog';
import { UseDialogContext } from './useDialog.types';

export const DialogContext = createContext<UseDialogContext>({} as UseDialogContext);
export const DialogProvider = ({ children }: { children: ReactNode }): any => {
  const { component, props, showDialog, hideDialog, destroyDialog } = useDialog();

  const renderDialog = () => {
    const DialogComponent = component;
    return DialogComponent ? <DialogComponent {...props} /> : <></>;
  };

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog, destroyDialog }}>
      {children}
      {renderDialog()}
    </DialogContext.Provider>
  );
};
