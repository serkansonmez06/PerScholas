import * as actionTypes from "./actionTypes"

//step-2
//actions are method that we use it for our component. each function takes two parameter. one is 
// 0ne is type: actionType. after dot it will generate option for us which we create in our action files and import it with * which mean import all
//second argument is payload:1  
export const increaseCounter =()=> ({
    type:actionTypes.INCREASE_COUNTER, //two paramaters of this func. 
    payload:1
})

export const decreaseCounter =()=> ({
    type:actionTypes.DECREASE_COUNTER, //two paramaters of this func. 
    payload:1
})

export const increaseByTwoCounter =()=> ({
    type:actionTypes.INCREASE_BY_TWO_COUNTER, //two paramaters of this func. 
    payload:2
})

//step-3 create reducers folder and create