import React, { FC } from "react";

import styles from "../Styles/Home.module.css";

type Props = {
  children: React.ReactNode;
};

const DropdownPanel: FC<Props> = (props): JSX.Element => {
  return <div className={styles.dropdownPanel}>{props.children}</div>;
};

export default DropdownPanel;
