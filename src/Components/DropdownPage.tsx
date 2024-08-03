import React, { useContext, useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { GlobalContext } from "../Context/GlobalContext";

type Props = {
  goBack: () => void;
};

const DropdownPage = (props: Props) => {
  const [columns, setColumns] = useState<number>(3);

  const { askConfirmation, setAskConfirmation } = useContext(GlobalContext);
  const { gridColumns, setGridColumns } = useContext(GlobalContext);
  const { colorTheme, setColorTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (gridColumns !== columns) {
      setColumns(gridColumns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGridColumns]);

  useEffect(() => {
    if (columns < 3) {
      setColumns(3);
    }
    if (columns > 5) {
      setColumns(5);
    }
    setGridColumns(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const handleGoBack = () => {
    props.goBack();
  };

  const handleCountUp = () => {
    setColumns(columns + 1);
  };

  const handleCountDown = () => {
    setColumns(columns - 1);
  };

  return (
    <div className={styles.dropdownPage}>
      <div>
        <button
          className={stylesGlobal.backButton + " " + stylesGlobal.icon}
          style={{ width: "230px", textAlign: "start" }}
          onClick={handleGoBack}
        >
          <IoChevronBackOutline size={22} />
        </button>
      </div>
      <div>
        <div className={styles.dropdownSection}>
          <span>Confirm removing ?</span>
          <button
            className={
              styles.dropdownButton + " " + stylesGlobal.deletePopupNoButton
            }
            style={{
              backgroundColor: askConfirmation ? "#7077a1" : "#e75c40",
              border: "none",
              padding: "5px 10px",
              width: "50px",
            }}
            onClick={() => setAskConfirmation(!askConfirmation)}
          >
            {askConfirmation ? "YES" : "NO"}
          </button>
        </div>
        <div className={styles.dropdownSectionVertical}>
          <span
            style={{
              width: "100%",
              textAlign: "start",
            }}
          >
            Columns in Content Grid:
          </span>
          <div className={styles.dottedRangeInput}>
            <button className={styles.counterButton} onClick={handleCountDown}>
              <CiCircleMinus
                size={22}
                className={stylesGlobal.icon}
                color="#b7bbd0"
              />
            </button>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {[3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={styles.dotButton}
                  value={value}
                  onClick={() => setColumns(value)}
                  style={
                    columns === value
                      ? {
                          width: "28px",
                          height: "28px",
                          border: "4px solid #e4806c",
                          backgroundColor: "#e75c40",
                        }
                      : {
                          border: "2px solid #9da4ca",
                        }
                  }
                >
                  {value}
                </button>
              ))}
            </div>
            <button className={styles.counterButton} onClick={handleCountUp}>
              <CiCirclePlus
                size={22}
                className={stylesGlobal.icon}
                color="#b7bbd0"
              />
            </button>
          </div>
        </div>
        <div className={styles.dropdownSection}>
          <span>Themes: </span>
          <select
            className={styles.dropdownButton}
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value)}
          >
            <option value="palenight">Palenight</option>
            <option value="github">Github</option>
            <option value="andromeda">Andromeda</option>
            <option value="vscode">VS Code</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownPage;
