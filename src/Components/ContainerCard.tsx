import React, { useEffect, useReducer } from "react";
import {
  BiCog,
  BiCopy,
  BiEdit,
  BiZoomIn,
  BiZoomOut,
  BiCodeBlock,
  BiCheckCircle,
  BiDownArrow,
  BiCopyAlt,
} from "react-icons/bi";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";
import CodeEditor from "./CodeEditor";

type State = {
  zoomValue: number;
  showCode: boolean;
  editingTitle: boolean;
  title: string;
  copied: boolean;
  selectedLanguage: string;
};

type Action =
  | { type: "SET_ZOOM_VALUE"; payload: number }
  | { type: "TOGGLE_SHOW_CODE" }
  | { type: "TOGGLE_EDITING_TITLE" }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_COPIED"; payload: boolean }
  | { type: "SET_SELECTED_LANGUAGE"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ZOOM_VALUE":
      return { ...state, zoomValue: action.payload };
    case "TOGGLE_SHOW_CODE":
      return { ...state, showCode: !state.showCode };
    case "TOGGLE_EDITING_TITLE":
      return { ...state, editingTitle: !state.editingTitle };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_COPIED":
      return { ...state, copied: action.payload };
    case "SET_SELECTED_LANGUAGE":
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  zoomValue: 1,
  showCode: false,
  editingTitle: false,
  title: "⏺ Icon with text button",
  copied: false,
  selectedLanguage: "JSX",
};

const ContainerCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.zoomValue < 1) {
      dispatch({ type: "SET_ZOOM_VALUE", payload: 1 });
    }
    if (state.zoomValue > 3) {
      dispatch({ type: "SET_ZOOM_VALUE", payload: 3 });
    }
  }, [state.zoomValue]);

  useEffect(() => {
    if (state.copied) {
      const timer = setTimeout(() => {
        dispatch({ type: "SET_COPIED", payload: false });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.copied]);

  const languages = ["JSX", "css"];

  return (
    <div className={styles.containerCard}>
      <div className={styles.componentContainer}>
        {/* ZOOM BUTTONS */}
        <div className={styles.componentButtonContainer}>
          <button
            className={styles.componentButton}
            onClick={() =>
              dispatch({
                type: "SET_ZOOM_VALUE",
                payload: state.zoomValue - 1,
              })
            }
          >
            <BiZoomOut size={18} />
          </button>
          <input
            value={"x" + state.zoomValue}
            className={styles.componentZoomInput}
            max={3}
            min={1}
            disabled
          />
          <button
            className={styles.componentButton}
            onClick={() =>
              dispatch({
                type: "SET_ZOOM_VALUE",
                payload: state.zoomValue + 1,
              })
            }
          >
            <BiZoomIn size={18} />
          </button>
        </div>
      </div>
      <div className={styles.componentTitle}>
        <input
          className={styles.componentTitleInput}
          value={state.title}
          type="text"
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
          disabled={state.editingTitle ? false : true}
          ref={
            state.editingTitle ? (input) => input && input.focus() : undefined
          }
        />
        <BiCheckCircle
          size={22}
          className={stylesGlobal.icon}
          onClick={() => dispatch({ type: "TOGGLE_EDITING_TITLE" })}
          color={state.editingTitle ? "inherit" : "transparent"}
        />
      </div>
      <div className={styles.componentOptions}>
        <button
          className={styles.componentButton}
          onClick={() => dispatch({ type: "TOGGLE_EDITING_TITLE" })}
          style={state.editingTitle ? { backgroundColor: "#1f2338" } : {}}
        >
          <BiEdit size={22} />
        </button>
        <button
          className={styles.componentButton}
          onClick={() => {
            navigator.clipboard.writeText(state.title);
            dispatch({ type: "SET_COPIED", payload: true });
          }}
        >
          {state.copied ? (
            <BiCheckCircle
              size={22}
              className={stylesGlobal.icon}
              color="green"
            />
          ) : (
            <BiCopy size={22} />
          )}
        </button>
        <button className={styles.componentButton}>
          <BiCog size={22} />
        </button>
        <button
          className={styles.componentButton}
          onClick={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
        >
          <BiCodeBlock size={22} />
        </button>
      </div>
      <div
        className={
          styles.componentCodeContainer +
          " " +
          (state.showCode ? styles.activeCodeContainer : "")
        }
      >
        <div className={styles.componentCodeEditor}>
          <div className={styles.componentCodeEditorContent}>
            <div className={styles.codeEditorLangSelection}>
              {languages.map((lang, index) => (
                <button
                  key={index}
                  className={styles.codeEditorLangButton}
                  onClick={() =>
                    dispatch({ type: "SET_SELECTED_LANGUAGE", payload: lang })
                  }
                  style={
                    state.selectedLanguage === lang
                      ? {
                          borderBottom: "2px solid #f19583",
                          color: "#f19583",
                        }
                      : {}
                  }
                >
                  {lang}
                </button>
              ))}
            </div>
            <CodeEditor
              title={state.title}
              language={state.selectedLanguage === "JSX" ? "jsx" : "css"}
              code={
                state.selectedLanguage === "JSX"
                  ? [
                      `import { ChangeEvent, FC, useRef, useState } from "react";
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
                      `.replaceAll("  ", ""),
                    ]
                  : [
                      `.codeEditor {
                        width: 100%;
                        height: 100%;
                        text-align: start;
                        border: none;
                        outline: none;
                        padding: 0;
                        font-family: "Fira Code", monospace;
                        font-size: 11px;
                      }`.replaceAll("  ", ""),
                    ]
              }
            />
          </div>
          <button
            className={styles.codeEditorAbsoluteButton}
            style={{ right: "-5px", top: "-5px" }}
            onClick={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
          >
            <BiDownArrow size={20} className={stylesGlobal.icon} />
          </button>
          <button
            className={styles.codeEditorAbsoluteButton}
            style={{ right: "30px", top: "-5px" }}
            onClick={() => {}}
          >
            <BiCopyAlt size={20} className={stylesGlobal.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
