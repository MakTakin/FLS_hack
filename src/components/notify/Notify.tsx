import React, { FC } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const success = (message: string, props?: any) => {
  toast.success(message);
};

export const warning = (message: string, props?: any) => {
  toast.warn(message, props);
};

export const error = (message: string, props?: any) => {
  toast.error(message, props);
};

export const info = (message: string, props?: any) => {
  toast.info(message, props);
};

export const Notify: FC<any> = props => {
  return <ToastContainer {...props} />;
};
