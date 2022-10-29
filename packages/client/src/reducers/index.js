import {combineReducers} from 'redux';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
    heroesReducer,
});

export default rootReducer;

