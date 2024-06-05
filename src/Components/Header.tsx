import styles from "../Styles/Home.module.css";
import SearchBar from "./SearchBar";

// icons
import { CiDark, CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import UserDropdown from "./UserDropdown";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>COMPLIB</h1>
      <SearchBar />
      <div className={styles.preferences}>
        <div>
          <div className={styles.github}>
            <FaGithub color="white" size={28} />
          </div>
          <div className={styles.theme}>
            {"dark" ? (
              <CiDark color="white" size={32} />
            ) : (
              <CiLight color="white" size={32} />
            )}
          </div>
        </div>
        <div>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
