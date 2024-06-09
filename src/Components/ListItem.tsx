import React, { CSSProperties, FC, useEffect, useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  item: string;
  active: boolean;
  setActive: (active: string) => void;
  removeItem: (item: string) => void;
  setItems: (items: string[]) => void;
  items: string[];
  editing?: boolean;
}

// the links should be able to jump through sections in ContentArea
// TODO : Also receive the current category/list

let activeStyles: CSSProperties = {
  backgroundColor: "#424769",
  padding: "4px 10px 4px 5px",
  color: "#ddd",
  margin: "2px 0 5px 2px",
  textAlign: "center",
  borderRadius: "5px",
};

const ListItem: FC<Props> = (props): JSX.Element => {
  const [value, setValue] = useState<string>(props.item);

  // useEffect(() => {
  //   if (props.active && props.editing) {
  //     props.setActive("");
  //     activeStyles = {};
  //   }

  //   return () => {
  //     activeStyles = {
  //       backgroundColor: "#424769",
  //       padding: "4px 10px 4px 5px",
  //       color: "#ddd",
  //       margin: "2px 0 5px 2px",
  //       textAlign: "center",
  //       borderRadius: "5px",
  //     };
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.editing]);

  useEffect(() => {
    if (props.active && props.editing) {
      props.setActive("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active, props.editing, props.setActive]);

  const handleRenameItem = (newName: string) => {
    const prevName = props.item;
    //  TODO : add cancel rename functionality to revert the name back to the previous one
    if (newName === prevName) {
      return;
    }

    const index = props.items.indexOf(prevName);
    let tempItems = [...props.items];
    tempItems[index] = newName;
    props.setItems(tempItems);
  };

  const handleRemoveItem = (itemToRemove: string) => {
    const newItems = props.items.filter((item) => item !== itemToRemove);
    props.setItems(newItems);
  };

  return (
    <ul
      className={styles.listItem}
      style={props.active ? activeStyles : {}}
      onClick={
        props.editing
          ? () => {
              props.setActive("");
            }
          : () => props.setActive(props.item)
      }
    >
      {props.editing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => handleRenameItem(value)}
          className={styles.listItemInput}
          maxLength={20}
        />
      ) : (
        props.item
      )}
      {props.editing && (
        <div>
          <IoRemoveCircleOutline
            size={20}
            color="#db4737"
            className={stylesGlobal.icon}
            onClick={() => handleRemoveItem(props.item)}
          />
        </div>
      )}
    </ul>
  );
};

export default ListItem;
