import React, { useState } from "react";
import { UncontrolledAccordion } from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import "./App.css";
import { Select } from "./Select";
import { Accordion } from "./Components/Accordion/Accordion";
import { Rating } from "./Components/Rating/Rating";
import { OnOff } from "./Components/OnOff/OnOff";
import { UncontrolledRating } from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"App title"} />
      <Rating value={3} />
      <Accordion titleValue={"menu"} collapsed={true} />
      <Accordion titleValue={"settings"} collapsed={false} />
      <Rating value={2} />
      <OnOff />
      <OnOff />
      <OnOff />
      <OnOff />
      <UncontrolledAccordion titleValue="menu" />
      {/* <OnOff on={false} /> */}
      <UncontrolledRating />
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
