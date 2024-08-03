import React, { FC } from "react";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import styles from "../Styles/Home.module.css";

type ZoomControlsProps = {
  zoomValue: number;
  setZoomValue: (value: number) => void;
};

const ZoomControls: FC<ZoomControlsProps> = ({ zoomValue, setZoomValue }) => {
  return (
    <div className={styles.componentButtonContainer}>
      <button
        className={styles.componentButton}
        onClick={() => setZoomValue(zoomValue - 1)}
      >
        <BiZoomOut size={18} />
      </button>
      <input
        value={"x" + zoomValue}
        className={styles.componentZoomInput}
        max={3}
        min={1}
        disabled
      />
      <button
        className={styles.componentButton}
        onClick={() => setZoomValue(zoomValue + 1)}
      >
        <BiZoomIn size={18} />
      </button>
    </div>
  );
};

export default ZoomControls;
