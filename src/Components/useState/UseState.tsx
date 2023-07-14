import React, { useEffect, useMemo, useState } from "react";
import { Clock } from "../Clock/Clock";

const generateData = () => {
  console.log("generate");
  return 234234234234;
};

export const UseState = () => {
  // const initialValue = generateData();
  const [counter, setCounter] = useState(generateData);
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(hours);

  useEffect(() => {
    setInterval(() => {});
  }, []);
  // const initValue = useMemo(generateData, []);
  return (
    <div>
      {/* <button onClick={() => setCounter((state) => state + 1)}>+</button> */}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <br />
      <div>
        <Clock />
      </div>
    </div>
  );
};
