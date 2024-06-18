import React, { FC } from "react";
import { BiDownArrow } from "react-icons/bi";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

type StateEditorProps = {
  modifying: boolean;
  toggleModifying: () => void;
};

const StateEditor: FC<StateEditorProps> = ({ modifying, toggleModifying }) => {
  return (
    <div className={styles.componentStateEditor}>
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <BiDownArrow
          size={18}
          color="#f19583"
          className={stylesGlobal.icon}
          onClick={toggleModifying}
        />{" "}
        Component Properties and State
      </h3>
      <div className={styles.componentProperties}>
        <div className={styles.propsSection}>
          <span>Props</span>
          <div>
            <label>Prop 1</label>
            <input type="text" />
          </div>
          <div>
            <label>Prop 2</label>
            <input type="text" />
          </div>
          <div>
            <label>Prop 3</label>
            <input type="text" />
          </div>
          <div>
            <label>Prop 4</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.stateSection}>
          <span>State</span>
          <div>
            <label>State 1</label>
            <input type="text" />
          </div>
          <div>
            <label>State 2</label>
            <input type="text" />
          </div>
          <div>
            <label>State 3</label>
            <input type="text" />
          </div>
          <div>
            <label>State 4</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateEditor;
