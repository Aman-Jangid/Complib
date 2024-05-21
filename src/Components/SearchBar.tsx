import styles from "../Styles/Home.module.css";
import Shortcut from "./Shortcut";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      {/* TODO: use Search Icon below */}
      <div>🔍</div>
      <div>
        {/* Bind to state and make little tweaks */}
        <input type="text" />
      </div>
      <div>
        {/* TODO: Shortcut should receive keys as arguments */}
        <Shortcut />
      </div>
    </div>
  );
}

export default SearchBar;
