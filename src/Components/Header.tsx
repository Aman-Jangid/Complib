import styles from "../Styles/Home.module.css";
import SearchBar from "./SearchBar";

// icons
import { FaGithub, FaSun, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>COMPLIB</h1>
      <SearchBar />
      <div className={styles.preferences}>
        <div className={styles.github}>
          <FaGithub />
        </div>
        <div className={styles.theme}>
          <FaSun />
        </div>
        {/* replace the element below with a component having user pfp and username */}
        <div className={styles.theme}>
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default Header;
