import React from "react";
import NewCom from "./newCom";

function Com2(props: any) {
  const { name } = props;
  return <div style={{ flex: 1, color: "blue" }}>{name}</div>;
}

export default NewCom(Com2);
