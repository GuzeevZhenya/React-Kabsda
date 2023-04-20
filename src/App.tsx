import React, { useState } from "react";
import { UncontrolledAccordion } from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import "./App.css";
import { Select } from "./Select";
import { Accordion } from "./Components/Accordion/Accordion";
import { Rating } from "./Components/Rating/Rating";
import { OnOff } from "./Components/OnOff/OnOff";
import { UncontrolledRating } from "./Components/UncontrolledRating/UncontrolledRating";
import { RatingValueType } from "./Components/Rating/Rating";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);
  return (
    <div className="App">
      <PageTitle title={"App title"} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        titleValue={"menu"}
        collapsed={accordionCollapsed}
        setAccordionCollapsed={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      <Accordion
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
