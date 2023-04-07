import React, { useState, } from "react";
import styles from "./Select.module.css";

type ItemType = {
  title: string;
  value: number;
};

type SelectType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select = (props: SelectType) => {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
  const toggleItems = () => {
    setActive(!active);
  };

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoverItem = props.items.find((i) => i.value === hoveredElementValue);

  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  };

  return (
    <>
      <div className={styles.select}>
        <span onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

        {active && (
          <div className={styles.items}>
            {props.items.map((i) => ( 
              <div
                onMouseEnter={()=>setHoveredElementValue(i.value)}
                className={
                  styles.item + " " + (hoverItem === i ? styles.selected : "")
                }
                onClick={() => onItemClick(i.value)}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
