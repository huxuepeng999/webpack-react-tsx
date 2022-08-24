import React from "react";
import "./index.scss";

const Component = () => {
  // const stage = new createjs.Stage("container");
  // const image = new createjs.Bitmap("../assets/40.png");
  // stage.addChild(image);
  return (
    <div className="container">
      <canvas id="container" className="container-canvas" />
    </div>
  );
};
export default Component;
