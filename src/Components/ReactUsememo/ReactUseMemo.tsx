import React, { useMemo, useState } from "react";

// export default {
//   title: "React memo",
// };

export const ReactMemo = () => {
  const [a, setA] = useState(3);
  const [b, setB] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  resultB = useMemo(() => {
    let tempResultB = 1;
    for (let i = 1; i <= b; i++) {
      tempResultB = tempResultB * i;
    }
    return tempResultB;
  }, [b]);

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />

      <div>result for a : {resultA}</div>

      <div>result for b : {resultB}</div>
    </>
  );
};

const UserSecret = (props: { users: Array<string> }) => {
  console.log("users");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UserSecret);

export const HelpsForReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["ivan", "vasia", "kate"]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}></button>
      {counter}
      <Users users={users} />
    </>
  );
};
