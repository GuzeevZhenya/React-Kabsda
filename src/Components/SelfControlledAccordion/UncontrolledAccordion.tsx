import { useState } from "react";
type AccordionPropsType = {
  titleValue?: string;
  collapsed?: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(true);

  const openHandler = (isOpen: boolean) => {
    setCollapsed(isOpen);
  };
  return (
    <div>
      <AccordionTitle
        openHandler={openHandler}
        collapsed={collapsed}
        title={props.titleValue ? props.titleValue : "title"}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  collapsed: boolean;
  openHandler: (isOpen: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.openHandler(!props.collapsed)}>{props.title}</h3>
  );
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
