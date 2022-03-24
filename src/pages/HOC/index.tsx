import React, { Component } from "react";
import Com1 from "../../Hoc/com1";
import Com2 from "../../Hoc/com2";

export default class index extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Com1 name={"com1"}></Com1>
        <Com2 name={"com2"}></Com2>
      </div>
    );
  }
}
