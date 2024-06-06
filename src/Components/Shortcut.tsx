import { FC, useEffect } from "react";
import styles from "../Styles/Global.module.css";

interface Props {
  modifierKey: string;
  // letters and symbols to be exact
  SymbolKey: string;
}

// takes at most three arguments modifierKey1,modifierKey2,letter_key
const Shortcut: FC<Props> = (props): JSX.Element => {
  const keyElement = (key: String) => <div className={styles.key}>{key}</div>;

  const handleShortcut = (event: KeyboardEvent) => {
    const isModifierKeyPressed = (event as any)[props.modifierKey];
    if (isModifierKeyPressed && event.key === props.SymbolKey) {
      event.preventDefault();
      console.log(props.modifierKey + props.SymbolKey + " was pressed!");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  });

  return (
    <div className={styles.shortcut}>
      {props.modifierKey && keyElement(props.modifierKey.replace("Key", ""))}
      {props.SymbolKey && keyElement(props.SymbolKey)}
    </div>
  );
};

export default Shortcut;
