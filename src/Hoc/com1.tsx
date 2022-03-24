import React from "react";
import newCom from "./newCom";
function Com1(props: any) {
  const { name } = props;
  return <div style={{ flex: 1, color: "red" }}>{name}</div>;
}

export default newCom(Com1);
