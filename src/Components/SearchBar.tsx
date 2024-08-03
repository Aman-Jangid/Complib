import { ChangeEvent, FC, useRef, useState } from "react";
import styles from "../Styles/Home.module.css";
import Shortcut from "./Shortcut";

import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  setValue: Function;
}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const [focused, setFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <div
      className={styles.searchBar}
      style={{
        outline: focused ? "3px solid #7077a1" : "none",
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
          ref={inputRef}
        />
      </div>
      <div>
        <Shortcut
          modifierKey="ctrlKey"
          symbolKey="k"
          function={() =>
            focused ? inputRef.current?.blur() : inputRef.current?.focus()
          }
        />
      </div>
    </div>
  );
};

export default SearchBar;
