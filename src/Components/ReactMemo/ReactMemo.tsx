import React, { useState } from "react";

export default {
  title: "React.memo",
};

const MessagesSecrets = (props: any) => {
  console.log("message");
  return <div>{props.count}</div>;
};

const UsersSecrets = (props: { users: Array<string> }) => {
  console.log("users");
  return (
    <div>
      {props.users.map((u, i) => (
        <div>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecrets);
const Messages = React.memo(MessagesSecrets);

export const ReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Ivan", "Alex", "Nikolay"]);

  const addUser = () => {
    const newUser = "Lesha";
    setUsers([...users, newUser]);
  };
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add </button>
      <Messages count={counter} />
      <Users users={users} />
    </>
  );
};
