import { createStore } from 'redux'
import reducers from './index'

export default function configureStore() {
    return createStore(reducers)
}

//step-4 //import {createStore} from redux
//import reducers from file path
// create function configureStore() return createStore(reducers)

//step-5 go to src folder and index.js file