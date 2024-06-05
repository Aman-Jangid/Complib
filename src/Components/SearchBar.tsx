import styles from "../Styles/Home.module.css";
import Shortcut from "./Shortcut";

import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div>
        <CiSearch color="white" size={22} />
      </div>
      <div>
        {/* Bind to state and make little tweaks */}
        <input type="text" placeholder="Search" />
      </div>
      <div>
        {/* TODO: Shortcut should receive keys as arguments */}
        <Shortcut />
      </div>
    </div>
  );
}

export default SearchBar;
