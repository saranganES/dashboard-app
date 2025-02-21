import React from "react";

const Child = ({ handleIncrement }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      {/* <button onClick={handleIncrement}>Child Increment</button> */}
    </div>
  );
};

export default React.memo(Child);
