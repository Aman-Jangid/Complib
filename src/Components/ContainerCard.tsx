import React, { FC, useEffect, useReducer } from "react";
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

type Props = {
  title: string;
  languages: string[];
  code: string[][];
};

type State = {
  zoomValue: number;
  showCode: boolean;
  editingTitle: boolean;
  title: string;
  copied: boolean;
  selectedLanguage: string;
  modifying: boolean;
};

type Action =
  | { type: "SET_ZOOM_VALUE"; payload: number }
  | { type: "TOGGLE_SHOW_CODE" }
  | { type: "TOGGLE_EDITING_TITLE" }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_COPIED"; payload: boolean }
  | { type: "SET_SELECTED_LANGUAGE"; payload: string }
  | { type: "SET_MODIFYING"; payload: boolean };

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
    case "SET_MODIFYING":
      return { ...state, modifying: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  zoomValue: 1,
  showCode: false,
  editingTitle: false,
  title: "",
  copied: false,
  selectedLanguage: "JSX",
  modifying: false,
};

const ContainerCard: FC<Props> = ({
  title,
  code,
  languages,
}): React.JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_TITLE", payload: title });
  }, [title]);

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

  return (
    <div className={styles.containerCard}>
      <div
        className={styles.componentContainer}
        style={{
          height: state.modifying ? "200px" : "300px",
        }}
      >
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
      {!state.modifying ? (
        <>
          {" "}
          <div className={styles.componentTitle}>
            <input
              className={styles.componentTitleInput}
              value={"⏺ " + state.title}
              type="text"
              onChange={(e) =>
                dispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              disabled={state.editingTitle ? false : true}
              ref={
                state.editingTitle
                  ? (input) => input && input.focus()
                  : undefined
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
            <button
              className={styles.componentButton}
              onClick={() =>
                dispatch({ type: "SET_MODIFYING", payload: !state.modifying })
              }
            >
              <BiCog size={22} />
            </button>
            <button
              className={styles.componentButton}
              onClick={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
            >
              <BiCodeBlock size={22} />
            </button>
          </div>{" "}
        </>
      ) : (
        <div className={styles.componentStateEditor}>
          <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BiDownArrow
              size={18}
              color="#f19583"
              className={stylesGlobal.icon}
              onClick={
                state.modifying
                  ? () => dispatch({ type: "SET_MODIFYING", payload: false })
                  : () => {}
              }
            />{" "}
            Component Properties and State
          </h3>
          <div className={styles.componentProperties}>
            <div>
              <label>Property 1</label>
              <input type="text" />
            </div>
            <div>
              <label>Property 2</label>
              <input type="text" />
            </div>
            <div>
              <label>Property 3</label>
              <input type="text" />
            </div>
            <div>
              <label>Property 4</label>
              <input type="text" />
            </div>
          </div>
        </div>
      )}
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
              language={
                state.selectedLanguage === "jsx"
                  ? "jsx"
                  : state.selectedLanguage.toLowerCase()
              }
              code={state.selectedLanguage === "jsx" ? code[0] : code[1]}
            />
          </div>
          <button
            className={styles.codeEditorAbsoluteButton}
            style={{ right: "-5px", top: "-5px" }}
            onClick={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
          >
            <BiDownArrow
              size={20}
              className={stylesGlobal.icon}
              color="#f19583"
            />
          </button>
          <button
            className={styles.codeEditorAbsoluteButton}
            style={{
              right: "30px",
              top: "-5px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onClick={() => {
              navigator.clipboard.writeText(state.title);
              dispatch({ type: "SET_COPIED", payload: true });
            }}
          >
            {" "}
            {state.copied ? (
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Copied!
              </span>
            ) : (
              ""
            )}
            <BiCopyAlt size={20} className={stylesGlobal.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
