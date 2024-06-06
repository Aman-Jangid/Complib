import { useState } from "react";
import styles from "../Styles/Home.module.css";
import IconButton from "./IconButton";

interface Button {
  active: boolean;
  iconPack: string;
  iconName: string;
  text: string;
  key: number;
}

function Sidebar() {
  const [buttons, setButtons] = useState<Array<Button>>([
    {
      active: false,
      key: 0,
      iconPack: "fa",
      iconName: "FaReact",
      text: "React",
    },
    {
      active: false,
      key: 1,
      iconPack: "tb",
      iconName: "TbBrandCss3",
      text: "CSS",
    },
    {
      active: false,
      key: 2,
      iconPack: "tb",
      iconName: "TbBrandReactNative",
      text: "React Native",
    },
    {
      active: false,
      key: 3,
      iconPack: "tb",
      iconName: "TbBrandFlutter",
      text: "Flutter",
    },
  ]);

  const handleClick = (key: number) => {
    const updatedButtons = buttons.map((button) =>
      button.key === key
        ? { ...button, active: true }
        : { ...button, active: false }
    );
    setButtons(updatedButtons);
  };

  return (
    <div className={styles.sidebar}>
      {buttons.map((button) => (
        <IconButton
          active={button.active}
          backgroundColor="#7077A1"
          color="white"
          width="150%"
          height="44px"
          iconPack={button.iconPack}
          iconName={button.iconName}
          text={button.text}
          textColor="white"
          key={button.key}
          onClick={() => handleClick(button.key)}
        />
      ))}
    </div>
  );
}

export default Sidebar;
