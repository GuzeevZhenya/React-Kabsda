import React, { useMemo, useState } from "react";

const generateData = () => {
  return 234234234234;
};

export const UseState = () => {
  const [counter, setCounter] = useState(0);
//   const initValue = useMemo(generateData, []);
  return (
    <div>
      <button onClick={() => setCounter((state) => state + 1)}>+</button>
      {counter}
    </div>
  );
};
