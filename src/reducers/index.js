import todoReducer from './todo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	todo: todoReducer,
});

export default rootReducer;