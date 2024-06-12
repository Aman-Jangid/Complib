import React, {
  CSSProperties,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IoRemoveCircleOutline,
  IoTrashSharp,
  IoCloseSharp,
} from "react-icons/io5";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";
import { GlobalContext } from "../Context/GlobalContext";

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
  const [confirmRemove, setConfirmRemove] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(true);

  const { askConfirmation } = useContext(GlobalContext);

  useEffect(() => {
    if (props.active && props.editing) {
      props.setActive("");
    }

    if (!props.editing) {
      setConfirmRemove(false);
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

  const handleConfirmRemove = () => {
    if (!askConfirmation) {
      handleRemoveItem(props.item.id);
      return;
    }
    setConfirmRemove(true);
  };

  return (
    <>
      {props.editing && confirmRemove ? (
        <div
          className={stylesGlobal.deleteItemConfirmLabel}
          onMouseOver={() => {
            setShowDelete(false);
          }}
          onMouseLeave={() => {
            setShowDelete(true);
          }}
        >
          <div>
            <span
              style={{
                color: "#ccc",
                fontWeight: "bold",
                overflow: "hidden",
                display: "inline-block",
                marginRight: "3px",
              }}
            >
              {showDelete ? "Delete " : ""}
            </span>

            <span
              style={{
                color: "#e07965",
                fontWeight: "bold",
                overflow: showDelete ? "hidden" : "unset",
                whiteSpace: showDelete ? "nowrap" : "none",
                textOverflow: showDelete ? "ellipsis" : "unset",
                maxWidth: "100px", // Adjust as needed
                display: "inline-block",
              }}
            >
              {props.item.title}?&nbsp;
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <button
              className={stylesGlobal.deletePopupNoButton}
              style={{ padding: "4px 5px" }}
              onClick={() => handleRemoveItem(props.item.id)}
            >
              <IoTrashSharp size={16} color="#fff" />
            </button>
            <button
              className={stylesGlobal.deletePopupYesButton}
              style={{ padding: "4px 5px" }}
              onClick={() => setConfirmRemove(false)}
            >
              <IoCloseSharp size={16} color="#fff" />
            </button>
          </div>
        </div>
      ) : (
        <ul
          className={styles.listItem}
          style={props.active ? activeStyles : {}}
          onClick={
            props.editing
              ? () => {
                  props.setActive("");
                }
              : () => props.setActive(props.item.id)
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
                onClick={handleConfirmRemove}
              />
            </div>
          )}
        </ul>
      )}
    </>
  );
};

export default ListItem;
