import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./components/CheckOut";
import LogIn from "./components/LogIn";

import { Provider } from "react-redux";
import { createStore } from "./redux/combinedStore";

const store = createStore();

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/home" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={LogIn} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
