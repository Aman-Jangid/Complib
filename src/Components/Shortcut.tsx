import styles from "../Styles/Global.module.css";

// takes at most three arguments modifierKey1,modifierKey2,letter_key
function Shortcut() {
  const modifierKey1 = "ctrl";
  const modifierKey2 = "";
  const symbolKey = "k";

  const keyElement = (key: String) => <div className={styles.key}>{key}</div>;

  return (
    <div className={styles.shortcut}>
      {modifierKey1 && keyElement(modifierKey1)}
      {modifierKey2 && keyElement(modifierKey2)}
      {symbolKey && keyElement(symbolKey)}
    </div>
  );
}

export default Shortcut;
