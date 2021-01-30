import React, { Component } from "react";
import { render } from "react-dom";
import WordDisplay from "./components/WordDisplay.js";
import ProgressBar from "./components/ProgressBar.js";


class App extends Component {
  render() {
    return (
      // <WordDisplay />
      <ProgressBar
        mastered={2}
        familiar={3}
        remaining={23}
        bonus={2}
         />
    )
  }
}

export default App;