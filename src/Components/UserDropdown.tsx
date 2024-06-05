import styles from "../Styles/Home.module.css";

import { FaUserCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function UserDropdown() {
  return (
    <div className={styles.userDropdown}>
      <IoChevronDown color="white" size={16} />
      <p>Username</p>
      <FaUserCircle color="white" size={32} />
    </div>
  );
}

export default UserDropdown;
