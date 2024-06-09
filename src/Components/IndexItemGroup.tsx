import { FC, FormEvent, KeyboardEvent, useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import ListItem from "./ListItem";

import { CiCirclePlus, CiEdit } from "react-icons/ci";
import {
  IoChevronDown,
  IoChevronForward,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

interface Props {
  heading: String;
  items: Array<String>;
  activeItem: String;
  editing?: Boolean;
  currentIndex: Number;
  handleItemClick: Function;
  handleRename: Function;
  handleEditGroup: Function;
}

const IndexItemGroup: FC<Props> = (props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<Boolean>(false);
  const [items, setItems] = useState<Array<String>>(props.items);
  const [value, setValue] = useState<String>(props.heading);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setItems(items.length ? [] : props.items);
  };

  // 1.allow renaming the groupHeading
  // 2.add delete and rename icons to group's items
  // 3.replace the item with a new one at the same index with the new name or delete it and shift the rest

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleEnterOnInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNaming();
    }
  };

  const handleRemoveItem = (item: String) => {
    const newItems = items.filter((listItem) => listItem !== item);
    setItems(newItems);
  };

  const handleNaming = () => {
    props.handleRename(value, props.currentIndex, items.length === 0, items);
  };

  return (
    <ul className={styles.indexItemGroup}>
      <>
        {props.editing ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "12% 73% 15%",
            }}
          >
            <div></div>
            <input
              type="text"
              value={value.toString()}
              onChange={handleOnChange}
              onKeyDown={handleEnterOnInput}
              className={styles.indexItemGroupInput}
              maxLength={12}
              autoFocus
            />
            <IoCheckmarkCircleOutline
              size={24}
              color="#7077a1"
              onClick={handleNaming}
              className={stylesGlobal.icon}
            />
          </div>
        ) : (
          <h3
            style={{
              color: "#7077a1",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 10px 10px -1.5rem",
            }}
          >
            {collapsed ? (
              <IoChevronForward
                size={22}
                onClick={handleCollapse}
                className={stylesGlobal.icon}
              />
            ) : (
              <IoChevronDown
                size={22}
                onClick={handleCollapse}
                className={stylesGlobal.icon}
              />
            )}

            <div onClick={handleCollapse}>{props.heading}</div>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <CiEdit
                size={22}
                className={stylesGlobal.icon}
                onClick={() => props.handleEditGroup(props.currentIndex)}
              />
              <CiCirclePlus
                size={22}
                className={stylesGlobal.icon}
                onClick={() => {}}
              />
            </div>
          </h3>
        )}
        {items.map((listItem) => (
          <ListItem
            item={listItem}
            active={listItem === props.activeItem}
            setActive={props.handleItemClick}
            // if editing and the list is not empty, replace text with input and add delete and check icons to the right of the ListItem
            editing={props.editing && items.length !== 0}
            removeItem={handleRemoveItem}
            items={items}
            setItems={setItems}
          />
        ))}
      </>
      {/* )} */}
    </ul>
  );
};

export default IndexItemGroup;
