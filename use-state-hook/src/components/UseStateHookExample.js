import React, { useState } from "react";

const UseStateHookExample = () => {
  var [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count = count + 1))}> increment </button>
      <p> count = {count} </p>
    </div>
  );
};

export default UseStateHookExample;
