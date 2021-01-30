import React from "react";
import Header from "./Header";
import AppMain from "./AppMain";

import "./App.css";

// App component(parent components)

const App = () => {
  return (
    <div className="App">
      <Header title="Amazon Cart" />

      <AppMain />
    </div>
  );
};

export default App;
