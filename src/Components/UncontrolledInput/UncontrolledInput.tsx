import React, { useState, ChangeEvent, useRef } from "react";

// export default {
//   title:'input',
// };

export const UncontrolledInput = () => {
  return <input value={"it-incubator"} />;
};

export const TrackValueInput = () => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onClickHandler = () => {
    const inputValue = ref.current as HTMLInputElement;
    setInputValue(inputValue.value);
  };

  return (
    <div>
      <input onChange={onChangeHandler} value={inputValue} />
      <div>
        <input ref={ref} type="text" />
        <button onClick={onClickHandler}>Save</button>
        <p>{inputValue}</p>
      </div>
    </div>
  );
};
