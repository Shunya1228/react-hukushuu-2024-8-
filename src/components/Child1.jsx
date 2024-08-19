import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px"
};

export const Child1 = memo ((props) => {
  console.log("Child1レンダリング");

  const { ocClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button onClick={ocClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  );
});