import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { GlobalContext } from "../Context/GlobalContext";

import styles from "../Styles/Home.module.css";

require("codemirror/lib/codemirror.css");
require("codemirror/theme/dracula.css");

require("codemirror/mode/jsx/jsx");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");
require("codemirror/mode/xml/xml");
require("codemirror/mode/dart/dart");
require("codemirror/mode/htmlmixed/htmlmixed");

type Languages = "javascript" | "jsx" | "css" | "xml" | "dart" | "htmlmixed";

interface Props {
  language: Languages;
  code: string[];
  title: string;
}

const CodeEditor: React.FC<Props> = ({ language, code, title }) => {
  const { gridColumns } = React.useContext(GlobalContext);

  const options = {
    mode: language,
    theme: "dracula",
    lineNumbers: true,
    lineWrapping: true,
    smartIndent: true,
    matchBrackets: true,
  };

  return (
    <div
      className={styles.codeEditor}
      style={{
        gridColumn: `span ${gridColumns}`,
      }}
    >
      <CodeMirror
        value={code.join("\n")}
        options={options}
        onBeforeChange={(editor, data, value) => {
          // Add your logic here
        }}
        className={styles.codeMirror}
        autoScroll
      />
      <div className={styles.componentTitle} style={{ textAlign: "center" }}>
        {title}
      </div>
    </div>
  );
};

export default CodeEditor;
