import { AnyAction, Middleware } from 'redux';

export const errorsHandlerMiddleware: Middleware = (store) => (next) => (action: AnyAction) => {
  if (!action.error) {

    next(action);
    return;

  }

  next(action);

};
