import React from "react";

type RatingPropsType = {
    value:number;
}

type StarPropsType = {
    selected: boolean;
}

export const Rating = (props: RatingPropsType) => {
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
};

function Star(props: StarPropsType) {
  if (props.selected) {
    return (
      <span>
        <b>Star</b>
      </span>
    );
  } else {
    return <span>Star</span>;
  }
}
