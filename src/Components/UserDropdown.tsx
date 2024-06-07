import { FC } from "react";
import styles from "../Styles/Home.module.css";

import { FaUserCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  onClick: Function;
  active: boolean;
}

const UserDropdown: FC<Props> = (props): JSX.Element => {
  const showPanel = () => {
    props.onClick();
  };

  return (
    <div className={styles.userDropdown} onClick={showPanel}>
      {props.active ? (
        <IoChevronDown color="white" size={16} />
      ) : (
        <IoChevronDown color="white" size={16} />
      )}
      <p>Username</p>
      <FaUserCircle color="white" size={32} />
    </div>
  );
};

export default UserDropdown;
