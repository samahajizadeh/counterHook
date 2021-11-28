import React, { Component, Fragment } from "react";
import Card from "./UI/Cards";
import { useDispatch, useSelector, connect } from "react-redux";

import Button from "./UI/Button";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const showCounter = useSelector((state) => state.showCounter);
//   const dispatch = useDispatch();
//   const increamentHandler = () => {
//     dispatch({ type: "Increament" });
//   };
//   const deCreamentHandler = () => {
//     dispatch({ type: "Decreament" });
//   };
//   const increaseHandler = () => {
//     dispatch({ type: "Increase", amount: 5 });
//   };
//   const toggleHandler = () => {
//     dispatch({ type: "ShowCounter" });
//   };
//   return (
//     <Card>
//       {showCounter && (
//         <Fragment>
//           <h1>Counter</h1>
//           <h2 className="text-success">{counter}</h2>
//         </Fragment>
//       )}
//       <Button className="btn-primary me-3" onClick={increamentHandler}>
//         Increament
//       </Button>
//       <Button className="btn-primary me-3" onClick={increaseHandler}>
//         Increase 5
//       </Button>
//       <Button className="btn-primary" onClick={deCreamentHandler}>
//         Increament
//       </Button>
//       <div className="w-100"></div>
//       <Button className="btn-primary" onClick={toggleHandler}>
//         Toggle Handler
//       </Button>
//     </Card>
//   );
// };

class Counetr extends Component {
  increamentHandler() {
    this.props.Increament();
  }

  deCreamentHandler() {
    this.props.Decreament();
  }

  increaseHandler() {
    this.props.Increase();
  }

  toggleHandler() {
    debugger
    this.props.showCounters();
  }

  render() {
    return (
      <Card>
        {this.props.showCounter && (
          <Fragment>
            <h1>Counter</h1>
            <h2 className="text-success">{this.props.counter}</h2>
          </Fragment>
        )}
        <Button className="btn-primary me-3" onClick={this.increamentHandler.bind(this)}>
          Increament
        </Button>
        <Button className="btn-primary me-3" onClick={this.increaseHandler.bind(this)}>
          Increase 5
        </Button>
        <Button className="btn-primary" onClick={this.deCreamentHandler.bind(this)}>
          Increament
        </Button>
        <div className="w-100"></div>
        <Button className="btn-primary" onClick={this.toggleHandler.bind(this)}>
          Toggle Handler
        </Button>
      </Card>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Increament: () => {
      dispatch({ type: "Increament" });
    },
    Decreament: () => {
      dispatch({ type: "Decreament" });
    },
    Increase: () => {
      dispatch({ type: "Increase", amount: 5 });
    },
    showCounters: () => {
      dispatch({ type: "ShowCounter" });
    },
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Counetr);
