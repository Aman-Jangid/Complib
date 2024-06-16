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
        <div>
          <label>Property 1</label>
          <input type="text" />
        </div>
        <div>
          <label>Property 2</label>
          <input type="text" />
        </div>
        <div>
          <label>Property 3</label>
          <input type="text" />
        </div>
        <div>
          <label>Property 4</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default StateEditor;
