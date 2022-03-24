import React from "react";
import { render } from "react-dom";

function newCom(WrappedComponent: (props: any) => JSX.Element) {
  const res = (props: any) => {
    const { name } = props;
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <div>new com</div>
        <WrappedComponent name={name}></WrappedComponent>
      </div>
    );
  };
  return res;
}

export default newCom;
