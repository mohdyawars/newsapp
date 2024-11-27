import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  x = "Something";
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    );
  }
}
