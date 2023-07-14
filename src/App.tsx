import React, { useState } from "react";
import { UncontrolledAccordion } from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import "./App.css";
import { Select } from "./Select";
import { Accordion } from "./Components/Accordion/Accordion";
import { Rating } from "./Components/Rating/Rating";
import { OnOff } from "./Components/OnOff/OnOff";
import { UncontrolledRating } from "./Components/UncontrolledRating/UncontrolledRating";
import { RatingValueType } from "./Components/Rating/Rating";
import {
  TrackValueInput,
  UncontrolledInput,
} from "./Components/UncontrolledInput/UncontrolledInput";
import {
  ControlledCheckbox,
  ControlledSelect,
  ControlleldInput,
} from "./Components/ControlledElements/ControlleldElements";
import {
  HelpsForReactMemo,
  ReactMemoUse,
} from "./Components/ReactUsememo/ReactUseMemo";
import { UseState } from "./Components/useState/UseState";
import { ReactMemo } from "./Components/ReactMemo/ReactMemo";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);

  let [users, setUsers] = useState([
    { name: "Ivan", age: 15 },
    { name: "Vasia", age: 23 },
    { name: "Nick", age: 15 },
  ]);
  return (
    <div className="App">
      <PageTitle title={"App title"} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        items={users}
        titleValue={"menu"}
        collapsed={accordionCollapsed}
        setAccordionCollapsed={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      <Accordion
        items={users}
        titleValue={"settings"}
        collapsed={accordionCollapsed}
        setAccordionCollapsed={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      {/* <OnOff /> */}
      <OnOff on={switchOn} onChange={setSwitchOn} />

      <UncontrolledAccordion titleValue="menu" />
      {/* <OnOff on={false} /> */}
      <UncontrolledRating />
      <UncontrolledInput />
      <TrackValueInput />
      <ControlleldInput />
      <ControlledCheckbox />
      <ControlledSelect />
      {/* <ReactMemo /> */}
      <ReactMemoUse />
      <HelpsForReactMemo />
      <UseState />
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
