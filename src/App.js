import React from "react";
import Header from "./Header";
import "./App.css";

/* *************************************************************/

// this only for test will be remove
import ForTest from "./ForTest.js";
import { testVaraible1 as x, testVaraible2 } from "./ForTest";

console.log(x + testVaraible2);

/* *************************************************************/

// App components(parent components)

const App = () => {
  return (
    <div className="App">
      <Header title="Amazon Cart" />

      {/* // this only for test will be remove */}
      <ForTest test="lets test first(this will be removed" />
    </div>
  );
};

export default App;
