import React, { Component } from "react";
import UserPhoto from "./images/default_photo.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home page
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
