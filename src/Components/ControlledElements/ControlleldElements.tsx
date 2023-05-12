import React, { ChangeEvent, useState } from "react";

export const ControlleldInput = () => {
  const [parentValue, setParentValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <div>
      <br />
      <input onChange={onChangeHandler} value={parentValue} />
      <p>{parentValue}</p>
    </div>
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);

  const onCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };

  return (
    <input onChange={onCheckedHandler} checked={parentValue} type="checkbox" />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("1");

  const onSelectedHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return (
    <div>
      <select value={parentValue} onChange={onSelectedHandler}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
      </select>
      <p>{parentValue}</p>
    </div>
  );
};
