import React, { FC, useEffect } from "react";
import { BiDownArrow, BiCopyAlt } from "react-icons/bi";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";
import CodeEditor from "./CodeEditor";

type CodeSectionProps = {
  showCode: boolean;
  languages: string[];
  selectedLanguage: string;
  code: string[][];
  setSelectedLanguage: (lang: string) => void;
  toggleShowCode: () => void;
  title: string;
  copied: boolean;
  setCopied: (value: boolean) => void;
};

const CodeSection: FC<CodeSectionProps> = ({
  showCode,
  languages,
  selectedLanguage,
  code,
  setSelectedLanguage,
  toggleShowCode,
  title,
  copied,
  setCopied,
}) => {
  useEffect(() => {
    setSelectedLanguage(languages[0]);
  });

  return (
    <div
      className={
        styles.componentCodeContainer +
        " " +
        (showCode ? styles.activeCodeContainer : "")
      }
    >
      <div className={styles.componentCodeEditor}>
        <div className={styles.componentCodeEditorContent}>
          <div className={styles.codeEditorLangSelection}>
            {languages.map((lang, index) => (
              <button
                key={index}
                className={styles.codeEditorLangButton}
                onClick={() => setSelectedLanguage(lang)}
                style={
                  selectedLanguage === lang
                    ? { borderBottom: "2px solid #f19583", color: "#f19583" }
                    : {}
                }
              >
                {lang}
              </button>
            ))}
          </div>
          <CodeEditor
            title={title}
            language={
              selectedLanguage === "jsx"
                ? "jsx"
                : selectedLanguage.toLowerCase()
            }
            code={selectedLanguage === "jsx" ? code[0] : code[1]}
          />
        </div>
        <button
          className={styles.codeEditorAbsoluteButton}
          style={{ right: "-5px", top: "-5px" }}
          onClick={toggleShowCode}
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
            navigator.clipboard.writeText("title");
            setCopied(true);
          }}
        >
          {copied ? (
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
  );
};

export default CodeSection;
