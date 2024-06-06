import styles from "../Styles/Home.module.css";
import IconButton from "./IconButton";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <IconButton
        active={true}
        backgroundColor="#7077A1"
        color="white"
        width="150%"
        height="44px"
        iconPack="fa"
        iconName="FaReact"
        textColor="white"
        text="React"
      />
      <IconButton
        active={false}
        backgroundColor="#7077A1"
        color="white"
        width="150%"
        height="44px"
        iconPack="tb"
        iconName="TbBrandCss3"
        textColor="white"
        text="CSS"
      />
      <IconButton
        active={false}
        backgroundColor="#7077A1"
        color="white"
        width="150%"
        height="44px"
        iconPack="tb"
        iconName="TbBrandReactNative"
        textColor="white"
        text="React Native"
      />
      <IconButton
        active={false}
        backgroundColor="#7077A1"
        color="white"
        width="150%"
        height="44px"
        iconPack="tb"
        iconName="TbBrandFlutter"
        textColor="white"
        text="Flutter"
      />
      <IconButton
        active={false}
        backgroundColor="#7077A1"
        color="white"
        width="150%"
        height="44px"
        iconPack="tb"
        iconName="TbPlus"
        textColor="white"
        text=""
      />
    </div>
  );
}

export default Sidebar;
