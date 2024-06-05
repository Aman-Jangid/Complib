import styles from "../Styles/Global.module.css";

import * as mdIcons from "react-icons/md";
import * as piIcons from "react-icons/pi";
import * as siIcons from "react-icons/si";
import * as tiIcons from "react-icons/ti";
import * as faIcons from "react-icons/fa";

function IconButton() {
  const iconName = "FaReact";
  const iconPack: any = "fa";
  const w = "150%";
  const h = "44px";
  const bgc = "#7077A1";

  const iconPacks: any = {
    md: mdIcons,
    pi: piIcons,
    si: siIcons,
    ti: tiIcons,
    fa: faIcons,
  };

  const SelectedIconPack = iconPacks[iconPack];
  const Icon = SelectedIconPack[iconName];

  return (
    <div
      className={styles.iconButton}
      style={{ width: w, height: h, backgroundColor: bgc }}
    >
      <Icon size={32} color={"white"} />
      <p>{iconName.slice(2)}</p>
    </div>
  );
}

export default IconButton;
