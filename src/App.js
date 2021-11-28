import React from "react";
import { Provider } from "react-redux";
// import BackwardCounter from "./components/BackwardCounter";
import Counter from "./components/Counter";
// import ForwardCounter from "./components/ForwardCounter";
import store from "./store/index";

const App = () => {

  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-center">
        <Provider store={store}>
          <Counter />
        </Provider>
        {/* <BackwardCounter />
        <div className="w-100" ></div>
        <ForwardCounter /> */}
      </div>
    </div>
  );
};
export default App;
