import React, { Component } from 'react'
import {connect} from 'react-redux'
//import connect from react-redux

 class Counter extends Component {
    render() {
        return (
            <div>

                {/*display state value */}
               <h1>{this.props.anyName}</h1>  
            </div>
        )
    }
}
//step-7
//create function name mapStateToProps - can be anyname- take (state as argument)
//returns {name: state.counterReducer}
function mapStateToProps(state){
    return {anyName:state.counterReducer} //we just want to display counterReducer
  //state value cames from counterReducer
}
// connect (function name)(component name)
export default  connect(mapStateToProps)(Counter);

// step-8 we need to work on action( any event-onClick-onSubmit) go to 
//increaseCounter component file