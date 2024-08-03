import React, { FC } from "react";
import styles from "../Styles/Home.module.css";

import parse from "html-react-parser";

type Props = {
  Code: string;
};

const ReactContainer: FC<Props> = (Props) => {
  return <div className={styles.reactContainer}>{parse(Props.Code)}</div>;
};

export default ReactContainer;
