import React, { useState } from "react";

import "./App.css";
import { Select } from "./Select";
import { Accordion } from "./Components/Accordion/Accordion";
import { Rating } from "./Components/Rating/Rating";

function App() {
  debugger;
  return (
    <div className="App">
      <PageTitle title={"App title"} />
      <Rating value={3} />
      <Accordion titleValue={"menu"} collapsed={true} />
      <Accordion titleValue={"settings"} collapsed={false} />
      <Rating value={2} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <>App title</>;
}

export default App;
