import { FC, useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import ListItem from "./ListItem";

import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

interface Props {
  heading: String;
  items: Array<String>;
  handleItemClick: Function;
  activeItem: String;
}

// the links should be able to jump through sections in ContentArea
// TODO : Also receive the current category/list

const IndexItemGroup: FC<Props> = (props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<Boolean>(false);
  const [items, setItems] = useState<Array<String>>(props.items);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setItems(items.length ? [] : props.items);
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleAdd = () => {
    console.log("Add");
  };

  return (
    <ul className={styles.indexItemGroup}>
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
            onClick={handleEdit}
          />
          <CiCirclePlus
            size={22}
            className={stylesGlobal.icon}
            onClick={handleAdd}
          />
        </div>
      </h3>
      {items.map((listItem) => (
        <ListItem
          item={listItem}
          active={listItem === props.activeItem}
          setActive={props.handleItemClick}
        />
      ))}
    </ul>
  );
};

export default IndexItemGroup;
