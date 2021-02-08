import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counterReducer
})

export default reducers;

//declare variable with combineReducers({ counterReducer, if there are more reducer we can add with coma})
//step-7 go to component page if you dont have it create it