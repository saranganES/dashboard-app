import React, { useState, useCallback } from "react";
import Child from "@/components/Chid"

const Parent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // const handleIncrement = () => {
  //   setCount((prev) => prev + 1);
  // };
  

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <Child handleIncrement={handleIncrement} />
    </div>
  );
};

export default Parent;
