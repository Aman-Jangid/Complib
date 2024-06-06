import React, { FC } from "react";
import styles from "../Styles/Home.module.css";

type Props = {
  Code: FC;
};

const ReactContainer: FC<Props> = (Props) => {
  return (
    <div className={styles.reactContainer}>
      <Props.Code />
    </div>
  );
};

export default ReactContainer;
