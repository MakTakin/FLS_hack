import { AnyAction } from 'redux';

export function reducer(state: any = {}, action: AnyAction) {

  const matches =
    /(.*)_(REQUEST$|REQUEST_DONE|REQUEST_FAILED)/.exec(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };

}
