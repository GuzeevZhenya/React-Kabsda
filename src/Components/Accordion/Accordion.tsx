import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  setAccordionCollapsed: (value: boolean) => void;
  items: UsersPropsType[];
};

type UsersPropsType = {
  name: string;
  age: number;
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
      {!collapsed && <AccordionBody items={props.items} />}
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

type AccordionBodyPropsType = {
  items: UsersPropsType[];
};

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i) => (
        <li key={i.age} onClick={()=>{alert(i.name)}}>{i.name}</li>
      ))}
    </ul>
  );
}
