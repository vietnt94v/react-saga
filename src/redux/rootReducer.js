import { combineReducers } from 'redux';
import todoReducers from './todo/todoReducers';
import userReducers from './user/userReducers';

const rootReducer = combineReducers({
  todo: todoReducers,
  user: userReducers
});

export default rootReducer;
