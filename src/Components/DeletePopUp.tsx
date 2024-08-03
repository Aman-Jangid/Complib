import { PopUp, PopupContext } from "../Context/PopupContext";
import React, { useContext } from "react";

import stylesGlobal from "../Styles/Global.module.css";

interface DeletePopUpProps {
  handleDeleteComponent: (id: string) => void;
}

const DeletePopUp: React.FC<DeletePopUpProps> = ({ handleDeleteComponent }) => {
  const {
    setShowPopup,
    componentIdToDelete,
    setComponentIdToDelete,
    componentTitleToDelete,
  } = useContext(PopupContext);

  const handleNoClick = () => {
    setShowPopup(false);
    setComponentIdToDelete(null);
  };

  const handleYesClick = () => {
    if (componentIdToDelete) {
      handleDeleteComponent(componentIdToDelete);
    }
    setShowPopup(false);
    setComponentIdToDelete(null);
  };

  return (
    <PopUp>
      <div className={stylesGlobal.deletePopup}>
        <p>
          Are you sure you want to delete the{" "}
          <span style={{ color: "#e75c40" }}>{componentTitleToDelete}</span>{" "}
          component group?
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            className={stylesGlobal.deletePopupNoButton}
            onClick={handleNoClick}
          >
            No
          </button>
          <button
            className={stylesGlobal.deletePopupYesButton}
            onClick={handleYesClick}
          >
            Yes
          </button>
        </div>
      </div>
    </PopUp>
  );
};

export default DeletePopUp;
