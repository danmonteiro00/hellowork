import { createStore, Store, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { IAppState } from './types';
import { rootReducer } from './rootReducer';

export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);
