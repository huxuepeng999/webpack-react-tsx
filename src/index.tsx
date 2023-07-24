import React from "react";
import ReactDOM from "react-dom";

import Home1 from './components/home'
// import Home from "./pages/home"; // jsbrige
// import Home from "./pages/createjs1/index"; // jsbrige
// import HOC from "./pages/HOC";
// import P1 from "./pages/p1";
import Home from "./pages/home/memo";
import { compose } from './pages/debug/test1'

const f1 = (x: number) => x + 1;
const f2 = (x: number) => x * 2;
const f3 = (x: number) => x / 3;

compose<(x: number) => number>(f1, f2, f3)(11)

import P1 from "./pages/p1";
ReactDOM.render(<P1></P1>, document.getElementById("root"));

// ReactDOM.render(<Home></Home>, document.getElementById("root"));
