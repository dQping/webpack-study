import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/iconfont.scss";
import UserPhoto from "./images/default_photo.png";

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello react</h1>
        <span className="iconfont">&#xe6df;</span>
        <span className="iconfont">&#xe882;</span>
        <span className="iconfont">&#xe6b4;</span>
        <span className="iconfont">&#xe605;</span>
        <img src={UserPhoto} alt="用户头像" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
