import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  setAccordionCollapsed: (value: boolean) => void;
};

export function Accordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <AccordionTitle
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        title={props.titleValue}
        setAccordionCollapsed={props.setAccordionCollapsed}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  setAccordionCollapsed: (value: boolean) => void;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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
