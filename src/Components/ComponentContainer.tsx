import React, { FC } from "react";
import styles from "../Styles/Home.module.css";

type Props = {
  Container: FC;
};

// useInsertionEffect --> css -> JS

const ComponentContainer: FC<Props> = (Props) => {
  // state showCode : Boolean
  let showCode = true;

  return (
    <div className={styles.componentContainer}>
      {showCode ? (
        <div className={styles.componentCodeView}>
          {/* covers whole ComponentContainer to show the code for the component */}
        </div>
      ) : (
        <>
          <div>
            <Props.Container />
          </div>
          <div className={styles.componentProperties}>
            <div className={styles.componentTitle}></div>
            <div className={styles.componentActions}></div>
          </div>
          {/* absolute element */}
          <div className={styles.viewCodeButton}></div>
        </>
      )}
    </div>
  );
};

export default ComponentContainer;
