import React, { FC, useEffect, useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  item: String;
  active: Boolean;
  setActive: Function;
  removeItem: Function;
  setItems: Function;
  items: Array<String>;
  editing?: Boolean;
}

// the links should be able to jump through sections in ContentArea
// TODO : Also receive the current category/list

let activeStyles: Object = {
  backgroundColor: "#424769",
  padding: "4px 10px 4px 5px",
  color: "#ddd",
  margin: "2px 0 5px 2px",
  textAlign: "center",
  borderRadius: "5px",
};

const ListItem: FC<Props> = (props): JSX.Element => {
  const [value, setValue] = useState<String>(props.item);

  useEffect(() => {
    if (props.active && props.editing) {
      props.setActive(false);
      activeStyles = {};
    }

    return () => {
      activeStyles = {
        backgroundColor: "#424769",
        padding: "4px 10px 4px 5px",
        color: "#ddd",
        margin: "2px 0 5px 2px",
        textAlign: "center",
        borderRadius: "5px",
      };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.editing]);

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

  return (
    <ul
      className={styles.listItem}
      style={props.active ? activeStyles : {}}
      onClick={
        props.editing
          ? () => {
              props.setActive(false);
            }
          : () => props.setActive(props.item)
      }
    >
      {props.editing ? (
        <input
          type="text"
          value={value.toString()}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => handleRenameItem(value.toString())}
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
            onClick={() => props.removeItem(props.item)}
          />
        </div>
      )}
    </ul>
  );
};

export default ListItem;
