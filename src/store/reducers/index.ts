import { AnyAction, combineReducers, Reducer } from 'redux';

import { reducer as loadingReducer } from './loadingReducer';


const rootReducer = (routerMiddeleware: any): Reducer<any, AnyAction> =>
  combineReducers({
    router: routerMiddeleware,
    loadingReducer,
  });

export default rootReducer;
