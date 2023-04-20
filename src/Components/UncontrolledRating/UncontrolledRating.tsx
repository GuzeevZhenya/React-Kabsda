import React, { useState } from "react";

type RatingPropsType = {
  // value: number;
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
  // value: 1 | 2 | 3 | 4 | 5;
};

export const UncontrolledRating = (props: RatingPropsType) => {
  const [value, setValue] = useState(4);

  const starHandler = (stars: number) => {
    setValue(stars);
  };

  return (
    <div>
      <Star setValue={() => setValue(1)} selected={value >= 1} />
      <Star setValue={() => setValue(2)} selected={value >= 2} />
      <Star setValue={() => setValue(3)} selected={value >= 3} />
      <Star setValue={() => setValue(4)} selected={value >= 4} />
      <Star setValue={() => setValue(5)} selected={value >= 5} />
    </div>
  );
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.setValue();
      }}
    >
      {props.selected ? <b>Star</b> : " star"}
    </span>
  );
}
