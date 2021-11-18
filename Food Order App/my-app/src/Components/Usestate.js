import React, { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Heyy
      </button>
      <p>{count}</p>
    </div>
  );
};
export default Usestate;
