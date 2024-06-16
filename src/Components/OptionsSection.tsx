import React, { FC } from "react";
import {
  BiEdit,
  BiCopy,
  BiCog,
  BiCodeBlock,
  BiCheckCircle,
} from "react-icons/bi";
import styles from "../Styles/Home.module.css";

type OptionsSectionProps = {
  editingTitle: boolean;
  copied: boolean;
  toggleEditingTitle: () => void;
  setCopied: (value: boolean) => void;
  toggleModifying: () => void;
  toggleShowCode: () => void;
};

const OptionsSection: FC<OptionsSectionProps> = ({
  editingTitle,
  copied,
  toggleEditingTitle,
  setCopied,
  toggleModifying,
  toggleShowCode,
}) => {
  return (
    <div className={styles.componentOptions}>
      <button
        className={styles.componentButton}
        onClick={toggleEditingTitle}
        style={editingTitle ? { backgroundColor: "#1f2338" } : {}}
      >
        <BiEdit size={22} />
      </button>
      <button
        className={styles.componentButton}
        onClick={() => {
          navigator.clipboard.writeText("title"); // adjust as needed
          setCopied(true);
        }}
      >
        {copied ? (
          <BiCheckCircle size={22} className={styles.icon} color="green" />
        ) : (
          <BiCopy size={22} />
        )}
      </button>
      <button className={styles.componentButton} onClick={toggleModifying}>
        <BiCog size={22} />
      </button>
      <button className={styles.componentButton} onClick={toggleShowCode}>
        <BiCodeBlock size={22} />
      </button>
    </div>
  );
};

export default OptionsSection;
