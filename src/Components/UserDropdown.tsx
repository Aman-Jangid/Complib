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
      <IoChevronDown
        color="white"
        size={16}
        style={{
          transform: props.active ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
        }}
      />
      <p>Username</p>
      <FaUserCircle color="white" size={32} />
    </div>
  );
};

export default UserDropdown;
