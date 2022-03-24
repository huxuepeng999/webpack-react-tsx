import React, { useState, useEffect } from "react";
import { jsbridge } from "./jsbridge";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // window.doneClick = doneClick;
    return () => {};
  }, []);

  const onSubmit = () => {
    console.log("res===onSubmit", username, password);
    jsbridge(
      "onSubmit",
      "提交",
      () => {
        console.log("res===onSubmit 成功");
      },
      () => {
        console.log("res===onSubmit 失败");
      }
    );
  };

  const onUserNmae = (event: any) => {
    setUsername(event.target.value);
  };

  const onPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const doneClick = () => {
    console.log("res===doneClick");
    alert("123");
  };

  return (
    <div>
      <div>
        名称1
        <input type="text" value={username} onChange={onUserNmae}></input>
      </div>
      <div>
        密码
        <input type="text" value={password} onChange={onPassword}></input>
      </div>
      <input type="submit" value="提交" onClick={onSubmit}></input>
    </div>
  );
};

export default Home;
