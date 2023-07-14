import React, { useEffect, useState } from "react";

type PropsType = {};

export const Clock = (props: PropsType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intevalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intevalId);
    };
  }, []);

  const getIinitialString = (number: number) =>
    number < 10 ? "0" + number : number;

  const hoursString = getIinitialString(date.getHours());
  const minuteString = getIinitialString(date.getMinutes());
  const secondsString = getIinitialString(date.getSeconds());

  return (
    <div>
      <span>{hoursString}</span>:<span>{minuteString}</span>:
      <span>{secondsString}</span>
    </div>
  );
};
