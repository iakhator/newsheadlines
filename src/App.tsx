import React, { ReactElement } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App(): ReactElement {
  return (
    <div className="App">
      <Nav />
      <Article></Article>
    </div>
  );
}

export default App;
