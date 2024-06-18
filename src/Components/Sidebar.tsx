import { useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

import styles from "../Styles/Home.module.css";
import IconButton from "./IconButton";
import { GlobalContext } from "../Context/GlobalContext";

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

  const { category, setCategory, width } = useContext(GlobalContext);

  useEffect(() => {
    const index = buttons.findIndex((button) => button.text === category);
    handleClick(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleClick = (key: number) => {
    setCategory(buttons[key].text);
    const updatedButtons = buttons.map((button) =>
      button.key === key
        ? { ...button, active: true }
        : { ...button, active: false }
    );
    setButtons(updatedButtons);
  };

  const handleAddButton = () => {
    console.log("Adding new Language/Framework Button!");
  };

  // get screen size and set size

  return (
    <div
      className={styles.sidebar}
      style={{ width: width > 1800 ? "15%" : "5%" }}
    >
      <button className={styles.sidebarEditButton}>
        <CiEdit size={18} /> edit
      </button>
      {buttons.map((button) => (
        <IconButton
          active={button.active}
          backgroundColor={button.active ? "#f19583" : "#7077A1"}
          color="white"
          width="150%"
          height="44px"
          iconPack={button.iconPack}
          iconName={button.iconName}
          text={width > 1800 ? button.text : ""}
          textColor="white"
          key={button.key}
          onClick={() => handleClick(button.key)}
        />
      ))}
      <IconButton
        active={false}
        backgroundColor="#424769"
        color="white"
        width="150%"
        height="44px"
        iconPack="fa"
        iconName="FaPlus"
        text=""
        textColor="white"
        key={-1}
        onClick={handleAddButton}
      />
    </div>
  );
}

export default Sidebar;
