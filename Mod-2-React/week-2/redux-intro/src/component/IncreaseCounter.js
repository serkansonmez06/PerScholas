import React, { Component } from "react";
import { connect } from "react-redux"; //it will connect us with redux
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions"; //this is our actions

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
       //write event and take event as argument{ this.props.dispatch(function name from counterAction)}
       //event wil work
          onClick={(event) => {
            this.props.dispatch(increaseCounter()); // increaseCounter is action function
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}


//step-8 create function  mapDispatchToProps ( take dispatch as a argument)
//return {actions can beanyname- bindActionCreators(takes two argument(increaseCounter -come from  counterAction file, dipatch))}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };//increaseCounter is our action
}
//connect (function nama)(component name)
export default connect(mapDispatchToProps)(IncreaseCounter);
