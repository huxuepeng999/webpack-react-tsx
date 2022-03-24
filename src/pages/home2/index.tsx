import React from "react";
import { doneClick } from "./native";

class Home extends React.Component {
  constructor(props: any) {
    super(props);

    window.doneClick = doneClick
  }



  render() {
    return <div>aaa</div>;
  }
}
export default Home;
