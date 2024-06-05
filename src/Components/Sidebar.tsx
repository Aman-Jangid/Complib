import styles from "../Styles/Home.module.css";
import IconButton from "./IconButton";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <IconButton />
      <IconButton />
      <IconButton />
      <IconButton />
    </div>
  );
}

export default Sidebar;
