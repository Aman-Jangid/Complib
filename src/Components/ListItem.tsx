import { FC } from "react";
import styles from "../Styles/Home.module.css";

interface Props {
  item: String;
  active: Boolean;
  setActive: Function;
}

// the links should be able to jump through sections in ContentArea
// TODO : Also receive the current category/list

const activeStyles: Object = {
  backgroundColor: "#424769",
  padding: "4px",
  color: "#ddd",
  margin: "5px",
  textAlign: "center",
  borderRadius: "5px",
};

const ListItem: FC<Props> = (props): JSX.Element => {
  return (
    <ul
      className={styles.listItem}
      style={props.active ? activeStyles : {}}
      onClick={() => props.setActive(props.item)}
    >
      {props.item}
    </ul>
  );
};

export default ListItem;
