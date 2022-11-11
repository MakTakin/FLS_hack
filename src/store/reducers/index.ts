import { AnyAction, combineReducers, Reducer } from 'redux';

import { reducer as user } from '../../modules/AuthModule/store/reducer';

import { reducer as loadingReducer } from './loadingReducer';


const rootReducer = (routerMiddeleware: any): Reducer<any, AnyAction> =>
  combineReducers({
    router: routerMiddeleware,
    loadingReducer,
    user,
  });

export default rootReducer;
