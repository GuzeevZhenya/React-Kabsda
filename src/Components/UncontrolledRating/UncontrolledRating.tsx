import React, { useState } from "react";

type RatingPropsType = {
  // value: number;
};

type StarPropsType = {
  selected: boolean;
  starHandler: (stars: number) => void;
  value: 1 | 2 | 3 | 4 | 5;
};

export const UncontrolledRating = (props: RatingPropsType) => {
  const [value, setValue] = useState(4);

  const starHandler = (stars: number) => {
    setValue(stars);
  };

  return (
    <div>
      <Star starHandler={starHandler} selected={value >= 1} value={1} />
      <Star starHandler={starHandler} selected={value >= 2} value={2} />
      <Star starHandler={starHandler} selected={value >= 3} value={3} />
      <Star starHandler={starHandler} selected={value >= 4} value={4} />
      <Star starHandler={starHandler} selected={value >= 5} value={5} />
    </div>
  );
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.starHandler(props.value);
      }}
    >
      {props.selected ? <b>Star</b> : " star"}
    </span>
  );
}
