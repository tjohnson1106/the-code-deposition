import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Nav from "./components/Nav";
import { Routes } from "./routes";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
