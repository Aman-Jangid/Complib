import React, { FC } from "react";

import styles from "../Styles/Global.module.css";

type Props = {
  height?: string;
  color?: string;
};

const DividerHorizontal: FC<Props> = ({
  color = "white",
  height = "1px",
}): JSX.Element => {
  return (
    <div
      className={styles.dividerHorizontal}
      style={{ height: height, backgroundColor: color }}
    ></div>
  );
};

export default DividerHorizontal;
