import logo from "./logo.svg";
import "./App.css";

function App() {
  const firstName = "saddam";
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "App",
    },
    /*#__PURE__*/ React.createElement(
      "header",
      {
        className: "App-header",
      },
      /*#__PURE__*/ React.createElement("img", {
        src: logo,
        className: "App-logo",
        alt: "logo",
      }),
      /*#__PURE__*/ React.createElement(
        "h2",
        null,
        "Hello my friends lets learn react js"
      ),
      /*#__PURE__*/ React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React with ",
        firstName
      )
    )
  );
}

export default App;
