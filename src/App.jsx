import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export  const App = memo (() => {

  console.log("Appレンダリング");

  const [num, setnum] = useState(0);
  
  //ボタンを押した際の関数
  const onClickButton = () => {
    setnum(num + 1);
  };

  //数値をリセットする関数（メモ化して、Child1にPropsとして渡す）
  const ocClickReset = useCallback (() => {
    setnum(0);
  }, []);
  return (
    <>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
    <Child1 ocClickReset={ocClickReset}/>
    <Child4 />
    </>
  );
});