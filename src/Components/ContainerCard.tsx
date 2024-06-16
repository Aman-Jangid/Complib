import React, { FC, useEffect, useReducer } from "react";
import styles from "../Styles/Home.module.css";

import ZoomControls from "./ZoomControls";
import TitleSection from "./TitleSection";
import OptionsSection from "./OptionsSection";
import StateEditor from "./StateEditor";
import CodeSection from "./CodeSection";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        style={{ height: state.modifying ? "200px" : "300px" }}
      >
        <ZoomControls
          zoomValue={state.zoomValue}
          setZoomValue={(value) =>
            dispatch({ type: "SET_ZOOM_VALUE", payload: value })
          }
        />
      </div>
      {!state.modifying ? (
        <>
          <TitleSection
            title={state.title}
            editingTitle={state.editingTitle}
            setTitle={(title) =>
              dispatch({ type: "SET_TITLE", payload: title })
            }
            toggleEditingTitle={() =>
              dispatch({ type: "TOGGLE_EDITING_TITLE" })
            }
          />
          <OptionsSection
            editingTitle={state.editingTitle}
            copied={state.copied}
            toggleEditingTitle={() =>
              dispatch({ type: "TOGGLE_EDITING_TITLE" })
            }
            setCopied={(value) =>
              dispatch({ type: "SET_COPIED", payload: value })
            }
            toggleModifying={() =>
              dispatch({ type: "SET_MODIFYING", payload: !state.modifying })
            }
            toggleShowCode={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
          />
        </>
      ) : (
        <StateEditor
          modifying={state.modifying}
          toggleModifying={() =>
            dispatch({ type: "SET_MODIFYING", payload: !state.modifying })
          }
        />
      )}
      <CodeSection
        showCode={state.showCode}
        languages={languages}
        selectedLanguage={state.selectedLanguage}
        code={code}
        setSelectedLanguage={(lang) =>
          dispatch({ type: "SET_SELECTED_LANGUAGE", payload: lang })
        }
        toggleShowCode={() => dispatch({ type: "TOGGLE_SHOW_CODE" })}
        title={state.title}
        copied={state.copied}
        setCopied={(value) => dispatch({ type: "SET_COPIED", payload: value })}
      />
    </div>
  );
};

export default ContainerCard;
