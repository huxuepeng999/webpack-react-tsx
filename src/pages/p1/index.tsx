import React, { useState, useEffect, useCallback, useMemo } from "react";

const P1 = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  // console.log("res===init");
  useEffect(() => {
    // console.log("res===2", count);
  }, [count]);

  const btnClick = (event: any) => {
    setCount(count + 1);
  };
  const onChange = (event: any) => {
    setVal(event.target.value);
  };
  const onChangeUck = useCallback(onChange, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={btnClick}>点击</button>
      {/* <Child val={val} onChange={onChange}></Child> */}
      {/* <Child val={val} onChange={onChangeUck}></Child> */}
      {/* <ChildMemo val={val} onChange={onChange}></ChildMemo> */}
      <ChildMemo val={val} onChange={onChangeUck}></ChildMemo>
      {/* <Child2 val={val}></Child2> */}
      <Child2Memo val={val}></Child2Memo>
    </div>
  );
};

const Child = (props: any) => {
  const { val, onChange } = props;
  // console.log("res===3", val);
  return <input value={val} onChange={onChange}></input>;
};
// Child+useCallback优化
const ChildMemo = React.memo(Child);

const Child2 = (props: any) => {
  const { val } = props;
  // console.log('res===child2',val)
  return <div>{val}</div>;
}
//Child2优化
const Child2Memo = React.memo(Child2);


export default P1;
