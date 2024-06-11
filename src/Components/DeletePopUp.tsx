import { PopUp, PopupContext } from "../Context/PopupContext";

import globalStyles from "../Styles/Global.module.css";

import React, { useContext } from "react";

type Props = {};

const DeletePopUp = (props: Props) => {
  const { setShowPopup } = useContext(PopupContext);

  return (
    <PopUp>
      <div className={globalStyles.deletePopup}>
        <p>
          Are You Sure You Want to delete{" "}
          <span style={{ color: "#e75c40" }}>{"Buttons"}</span> Component Group?
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button className={globalStyles.deletePopupNoButton}>No</button>
          <button className={globalStyles.deletePopupYesButton}>Yes</button>
        </div>
      </div>
    </PopUp>
  );
};

export default DeletePopUp;
