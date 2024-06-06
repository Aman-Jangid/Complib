import { ChangeEvent, FC } from "react";
import styles from "../Styles/Home.module.css";
import Shortcut from "./Shortcut";

import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  setValue: Function;
}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div>
        <CiSearch color="white" size={22} />
      </div>
      <div>
        {/* Bind to state and make little tweaks */}
        <input
          type="text"
          value={props.value}
          placeholder="Search"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        {/* TODO: Shortcut should receive keys as arguments */}
        <Shortcut modifierKey="ctrlKey" SymbolKey="k" />
      </div>
    </div>
  );
};

export default SearchBar;
