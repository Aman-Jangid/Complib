import { ChangeEvent, FC, useState } from "react";
import styles from "../Styles/Home.module.css";
import Shortcut from "./Shortcut";

import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  setValue: Function;
}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <div
      className={styles.searchBar}
      style={{
        outline: focused ? "2px solid #35384b" : "none",
      }}
    >
      <div>
        <CiSearch color="white" size={22} />
      </div>
      <div>
        <input
          type="text"
          value={props.value}
          placeholder="Search"
          onChange={(e) => handleInputChange(e)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
      <div>
        <Shortcut modifierKey="ctrlKey" SymbolKey="k" />
      </div>
    </div>
  );
};

export default SearchBar;
