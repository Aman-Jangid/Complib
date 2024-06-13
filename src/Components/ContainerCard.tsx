import React, { useContext, useEffect } from "react";

import { BiCog, BiCopy, BiEdit, BiZoomIn, BiZoomOut } from "react-icons/bi";

import styles from "../Styles/Home.module.css";
import { GlobalContext } from "../Context/GlobalContext";

type Props = {};

const ContainerCard = (props: Props) => {
  const [zoomValue, setZoomValue] = React.useState(1);

  const { gridColumns } = useContext(GlobalContext);

  useEffect(() => {
    if (zoomValue < 1) {
      setZoomValue(1);
    }
    if (zoomValue > 3) {
      setZoomValue(3);
    }
  }, [zoomValue]);

  const handleZoomIn = () => {
    setZoomValue(zoomValue + 1);
  };

  const handleZoomOut = () => {
    setZoomValue(zoomValue - 1);
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.componentContainer}>
        {/* Container a container, React Container for example */}
      </div>
      <div className={styles.componentTitle}>
        <h3 style={{ margin: 0, padding: 0 }}>⏺ Icon with text button</h3>
      </div>
      <div className={styles.componentOptions}>
        <button className={styles.componentButton}>
          <BiEdit size={22} />
        </button>
        <button className={styles.componentButton}>
          <BiCopy size={22} />
        </button>
        <button className={styles.componentButton}>
          <BiCog size={22} />
        </button>
        <div className={styles.componentButtonContainer}>
          <button className={styles.componentButton} onClick={handleZoomOut}>
            <BiZoomOut size={22} />
          </button>
          <input
            value={"x" + zoomValue / 1}
            className={styles.componentZoomInput}
            max={3}
            min={1}
            disabled
          />
          <button className={styles.componentButton} onClick={handleZoomIn}>
            <BiZoomIn size={22} />
          </button>
        </div>
        {gridColumns > 3 ? (
          ""
        ) : (
          <button className={styles.componentButton}>
            <BiCog size={22} />
          </button>
        )}
      </div>
      <div className={styles.componentCodeContainer}>
        {/* Container Code */}
      </div>
    </div>
  );
};

export default ContainerCard;
