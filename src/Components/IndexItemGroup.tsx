import { FC } from "react";
import styles from "../Styles/Home.module.css";
import ListItem from "./ListItem";

import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

interface Props {
  heading: String;
  items: Array<String>;
}

// the links should be able to jump through sections in ContentArea
// TODO : Also receive the current category/list

const IndexItemGroup: FC<Props> = (props): JSX.Element => {
  const collapsed: Boolean = false;

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
          <IoChevronForward size={22} />
        ) : (
          <IoChevronDown size={22} />
        )}
        {props.heading}
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <CiEdit size={22} />
          <CiCirclePlus size={22} />
        </div>
      </h3>
      {props.items.map((listItem) => (
        <ListItem
          item={listItem}
          active={listItem === "Post Card" ? true : false}
        />
      ))}
    </ul>
  );
};

export default IndexItemGroup;
