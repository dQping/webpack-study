import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./style/iconfont.scss";

import axios from "axios";
import List from "./List";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    axios.get("/mockapi/tabel/list").then(res => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
