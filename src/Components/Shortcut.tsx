import { FC, useEffect } from "react";
import styles from "../Styles/Global.module.css";

interface Props {
  modifierKey: string;
  symbolKey: string;
  function: () => void;
}

const Shortcut: FC<Props> = (props): JSX.Element => {
  const keyElement = (key: String) => <div className={styles.key}>{key}</div>;

  const handleShortcut = (event: KeyboardEvent) => {
    const isModifierKeyPressed = (event as any)[props.modifierKey];
    if (isModifierKeyPressed && event.key === props.symbolKey) {
      event.preventDefault();
      props.function();
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
      {props.symbolKey && keyElement(props.symbolKey)}
    </div>
  );
};

export default Shortcut;
