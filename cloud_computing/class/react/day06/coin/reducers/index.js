import { combineReducers } from 'redux';
import coinReducer from './reducer_coin';

const rootReducer = combineReducers({
    coin: coinReducer
});

export default rootReducer;
