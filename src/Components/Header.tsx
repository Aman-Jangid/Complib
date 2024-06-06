import { CiDark, CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import styles from "../Styles/Home.module.css";

import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import { useEffect, useState } from "react";

function Header() {
  const [query, setQuery] = useState<string>("");
  const [theme, setTheme] = useState<string>("dark");

  // replace with context method
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const openUrl = () => {
    window.open("https://github.com/Aman-Jangid/complib", "_blank");
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>COMPLIB</h1>
      <SearchBar value={query} setValue={setQuery} />
      <div className={styles.preferences}>
        <div>
          <div className={styles.github}>
            <FaGithub
              color="white"
              size={28}
              onClick={openUrl}
              className={styles.headerButton}
            />
          </div>
          <div className={styles.theme}>
            {theme === "dark" ? (
              <CiDark
                color="white"
                size={32}
                onClick={toggleTheme}
                className={styles.headerButton}
              />
            ) : (
              <CiLight
                color="white"
                size={32}
                onClick={toggleTheme}
                className={styles.headerButton}
              />
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
