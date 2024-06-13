import { FC, MouseEvent, MouseEventHandler, useState } from "react";

import styles from "../Styles/Global.module.css";

import { IoTrashSharp, IoCloseSharp } from "react-icons/io5";

import * as mdIcons from "react-icons/md";
import * as piIcons from "react-icons/pi";
import * as siIcons from "react-icons/si";
import * as tbIcons from "react-icons/tb";
import * as faIcons from "react-icons/fa";

import useLongPress from "../Hooks/useLongPress";

interface Props {
  iconName: string;
  iconPack: string;
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  textColor: string;
  text: string;
  active: Boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  iconSize?: number;
}

const IconButton: FC<Props> = (props): JSX.Element => {
  const iconPacks: any = {
    md: mdIcons,
    pi: piIcons,
    si: siIcons,
    tb: tbIcons,
    fa: faIcons,
  };

  const SelectedIconPack = iconPacks[props.iconPack];
  const Icon = SelectedIconPack[props.iconName];

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.onClick(e);
  };

  return (
    <div
      className={styles.iconButton}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        border: props.active ? "2px solid white" : "2px solid transparent",
      }}
      onClick={(e) => handleOnClick(e)}
    >
      {/* {(
        <div className={styles.iconButtonOptions}>
          <IoTrashSharp size={18} color="white" className={styles.icon} />
          <IoCloseSharp size={18} color="white" className={styles.icon} />
        </div>
      )} */}
      <Icon size={props.iconSize ? props.iconSize : 32} color={props.color} />
      <p style={{ color: props.textColor }}>{props.text}</p>
    </div>
  );
};

export default IconButton;
