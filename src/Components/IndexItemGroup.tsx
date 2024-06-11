import { FC, FormEvent, KeyboardEvent, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import {
  IoChevronDown,
  IoCheckmarkCircleOutline,
  IoTrashBinOutline,
} from "react-icons/io5";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import ListItem from "./ListItem";

import { PopupContext } from "../Context/PopupContext";

interface Item {
  id: string;
  title: string;
}

interface Props {
  id: string;
  heading: string;
  items: Item[];
  activeItemId: string;
  editing?: boolean;
  handleItemClick: (id: string) => void;
  handleRename: (
    name: string,
    id: string,
    isEmpty: boolean,
    items?: Item[]
  ) => void;
  handleEditGroup: (id: string) => void;
  handleDeleteGroup: (id: string) => void;
}

const IndexItemGroup: FC<Props> = (props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>(props.items);
  const [value, setValue] = useState<string>(props.heading);

  const { setShowPopup, setComponentIdToDelete } = useContext(PopupContext);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setItems(items.length ? [] : props.items);
  };

  const handleAddItem = () => {
    const newItem: Item = { id: uuidv4(), title: "NewItem" + items.length };
    const newItems = [...items, newItem];
    setItems(newItems);
    handleNaming(newItems);
  };

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleEnterOnInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNaming(items);
    }
  };

  const handleRemoveItem = (id: string) => {
    const newItems = items.filter((listItem) => listItem.id !== id);
    setItems(newItems);
    handleNaming(newItems);
  };

  const handleNaming = (newItems?: Item[]) => {
    const updatedItems = newItems || items;
    props.handleRename(
      value,
      props.id,
      updatedItems.length === 0,
      updatedItems
    );
  };

  const handleEditGroup = () => {
    if (collapsed) handleCollapse();
    props.handleEditGroup(props.id);
  };

  const handleDeleteGroup = () => {
    setComponentIdToDelete(props.id, props.heading);
    setShowPopup(true);
  };

  return (
    <ul className={styles.indexItemGroup}>
      <>
        {props.editing ? (
          <div style={{ display: "grid", gridTemplateColumns: "15% auto 15%" }}>
            <IoTrashBinOutline
              size={22}
              color="#7077a1"
              className={stylesGlobal.icon}
              style={{ transform: "translate(-105%)" }}
              onClick={handleDeleteGroup}
            />
            <input
              type="text"
              value={value}
              onChange={handleOnChange}
              onKeyDown={handleEnterOnInput}
              className={styles.indexItemGroupInput}
              maxLength={12}
              style={{ width: "100%" }}
              autoFocus
            />
            <IoCheckmarkCircleOutline
              size={24}
              color="#7077a1"
              onClick={() => handleNaming(items)}
              className={stylesGlobal.icon}
            />
          </div>
        ) : (
          <h3
            style={{
              color: "#7077a1",
              display: "flex",
              alignItems: "start",
              textAlign: "start",
              justifyContent: "space-between",
              margin: "0 10px 10px -1.5rem",
              cursor: "pointer",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <IoChevronDown
                size={22}
                onClick={handleCollapse}
                className={stylesGlobal.icon}
                style={{
                  transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)",
                }}
              />
              <div onClick={handleCollapse}>{props.heading}</div>
            </div>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <CiEdit
                size={22}
                className={stylesGlobal.icon}
                onClick={handleEditGroup}
              />
              <CiCirclePlus
                size={22}
                className={stylesGlobal.icon}
                onClick={handleAddItem}
              />
            </div>
          </h3>
        )}
        {items.map((listItem) => (
          <ListItem
            key={listItem.id}
            item={listItem}
            active={listItem.id === props.activeItemId}
            setActive={props.handleItemClick}
            editing={props.editing && items.length !== 0}
            removeItem={handleRemoveItem}
            items={items}
            setItems={setItems}
          />
        ))}
      </>
    </ul>
  );
};

export default IndexItemGroup;
