import { useEffect, useState } from "react";

import { CiDark, CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import styles from "../Styles/Home.module.css";

import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import DropdownPanel from "./DropdownPanel";
import IconButton from "./IconButton";
import DropdownPage from "./DropdownPage";

function Header() {
  const [query, setQuery] = useState<string>("");
  const [theme, setTheme] = useState<string>("dark");
  const [showDropdownPanel, setShowDropdownPanel] = useState<boolean>(false);
  const [inSettings, setInSettings] = useState<boolean>(false);

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
          <UserDropdown
            active={showDropdownPanel}
            onClick={() => setShowDropdownPanel(!showDropdownPanel)}
          />
        </div>
      </div>
      {showDropdownPanel && (
        <DropdownPanel>
          {inSettings ? (
            <DropdownPage goBack={() => setInSettings(false)} />
          ) : (
            <>
              <div className={styles.userInfo}>
                <h3 style={{ margin: 0, padding: 0 }}>John Doe</h3>
                <h5 style={{ margin: 0, padding: 0, color: "#bbb" }}>
                  @username
                </h5>
              </div>
              <IconButton
                active={false}
                backgroundColor="rgba(0, 0, 0, 0.1)"
                color="white"
                width="100%"
                iconSize={20}
                height="30px"
                iconPack="md"
                iconName="MdOutlineAccountCircle"
                text="Account"
                textColor="white"
                key={-1}
                onClick={() => {
                  console.log("aaaaaaa");
                }}
              />
              <IconButton
                active={false}
                backgroundColor="rgba(0, 0, 0, 0.1)"
                color="white"
                width="100%"
                iconSize={20}
                height="30px"
                iconPack="md"
                iconName="MdOutlineSettings"
                text="Settings"
                textColor="white"
                key={-1}
                onClick={() => setInSettings(true)}
              />
              <IconButton
                active={false}
                backgroundColor="rgba(0, 0, 0, 0.1)"
                color="white"
                width="100%"
                iconSize={20}
                height="30px"
                iconPack="md"
                iconName="MdLogout"
                text="Logout"
                textColor="white"
                key={-1}
                onClick={() => {
                  console.log("aaaaaaa");
                }}
              />
            </>
          )}
        </DropdownPanel>
      )}
    </header>
  );
}

export default Header;
