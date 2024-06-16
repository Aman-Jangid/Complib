import React, { FC } from "react";
import { BiCheckCircle } from "react-icons/bi";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

type TitleSectionProps = {
  title: string;
  editingTitle: boolean;
  setTitle: (title: string) => void;
  toggleEditingTitle: () => void;
};

const TitleSection: FC<TitleSectionProps> = ({
  title,
  editingTitle,
  setTitle,
  toggleEditingTitle,
}) => {
  return (
    <div className={styles.componentTitle}>
      <input
        className={styles.componentTitleInput}
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        disabled={!editingTitle}
        ref={editingTitle ? (input) => input && input.focus() : undefined}
        maxLength={40}
      />
      <BiCheckCircle
        size={22}
        className={stylesGlobal.icon}
        onClick={toggleEditingTitle}
        color={editingTitle ? "inherit" : "transparent"}
      />
    </div>
  );
};

export default TitleSection;
