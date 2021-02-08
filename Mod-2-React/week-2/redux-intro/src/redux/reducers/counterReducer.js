import * as actionTypes from "../actions/actionTypes"


//step-3 create counterReducer.js file and create function which takes two argument state and action
// declare variable and create a switch statement. 
//reducer will check each case and return the match. if there is no match 
//it will return default state.
//actionTypes comes from counterAction file
//INCREASE_COUNTER comes from actionTypes file
//return newstate= state and action.paylod
//import * stand all file from actionTypes
const counterReducer = (state = 0, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload)
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload)
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)

        default:
            return state;
    }

}


export default counterReducer;

//step-4  create configureStore.js in reducers folder