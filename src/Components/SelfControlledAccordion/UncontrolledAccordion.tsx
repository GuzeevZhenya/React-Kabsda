import { useReducer, useState } from "react";
import { StateType, reducer } from "./reducer";
type AccordionPropsType = {
  titleValue?: string;
  collapsed?: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  // let [collapsed, setCollapsed] = useState(true);
  let [state, dispatch] = useReducer(reducer, { collapsed: false });

  const openHandler = () => {
    dispatch({ type: "TOGGLE-COLLAPSED" });
  };
  return (
    <div>
      <AccordionTitle
        openHandler={openHandler}
        collapsed={state}
        title={props.titleValue ? props.titleValue : "title"}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  collapsed: StateType;
  openHandler: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={() => props.openHandler()}>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </ul>
  );
}
