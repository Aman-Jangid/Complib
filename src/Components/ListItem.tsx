import React, { CSSProperties, FC, useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface Item {
  id: string;
  title: string;
}

interface Props {
  item: Item;
  active: boolean;
  setActive: (active: string) => void;
  removeItem: (id: string) => void;
  setItems: (items: Item[]) => void;
  items: Item[];
  editing?: boolean;
}

let activeStyles: CSSProperties = {
  backgroundColor: "#424769",
  padding: "4px 10px 4px 5px",
  color: "#ddd",
  margin: "2px 0 5px 2px",
  textAlign: "center",
  borderRadius: "5px",
};

const ListItem: FC<Props> = (props): JSX.Element => {
  const [value, setValue] = useState<string>(props.item.title);

  useEffect(() => {
    if (props.active && props.editing) {
      props.setActive("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active, props.editing, props.setActive]);

  const handleRenameItem = (newName: string) => {
    const prevName = props.item.title;
    if (newName === prevName) {
      return;
    }

    const index = props.items.findIndex((item) => item.id === props.item.id);
    let tempItems = [...props.items];
    tempItems[index].title = newName;
    props.setItems(tempItems);
  };

  const handleRemoveItem = (id: string) => {
    const newItems = props.items.filter((item) => item.id !== id);
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
          : () => props.setActive(props.item.title)
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
        props.item.title
      )}
      {props.editing && (
        <div>
          <IoRemoveCircleOutline
            size={20}
            color="#db4737"
            className={stylesGlobal.icon}
            onClick={() => handleRemoveItem(props.item.id)}
          />
        </div>
      )}
    </ul>
  );
};

export default ListItem;
