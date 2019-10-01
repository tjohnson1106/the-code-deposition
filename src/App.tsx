import React from "react";
 import { Provider } from "react-redux";

import "./App.css";
// import { Routes } from "./routes";
import Nav from "./components/Nav";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
      </div>
    </Provider>
  );
};

export default App;
