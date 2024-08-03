import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import globalStyles from "../Styles/Global.module.css";

interface PopupContextProps {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
  componentIdToDelete: string | null;
  setComponentIdToDelete: (id: string | null) => void;
  componentTitleToDelete: string | null;
  setComponentTitleToDelete: (title: string | null) => void;
}

const PopupContext = createContext<PopupContextProps>({
  showPopup: false,
  setShowPopup: () => {},
  componentIdToDelete: null,
  setComponentIdToDelete: () => {},
  componentTitleToDelete: null,
  setComponentTitleToDelete: () => {},
});

interface PopupProviderProps {
  children: React.ReactNode;
}

const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [componentIdToDelete, setComponentIdToDelete] = useState<string | null>(
    null
  );
  const [componentTitleToDelete, setComponentTitleToDelete] = useState<
    string | null
  >(null);

  return (
    <PopupContext.Provider
      value={{
        showPopup,
        setShowPopup,
        componentIdToDelete,
        setComponentIdToDelete,
        componentTitleToDelete,
        setComponentTitleToDelete,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

interface PopupProps {
  children: JSX.Element;
}

const PopUp: React.FC<PopupProps> = ({ children }) => {
  const { showPopup, setShowPopup } = useContext(PopupContext);

  const closePopup = () => {
    setShowPopup(false);
  };

  return createPortal(
    <>
      {showPopup && (
        <div className={globalStyles.popupBackground}>
          <div>
            <div className={globalStyles.popup}>
              <div style={{ position: "absolute", top: "5px", right: "5px" }}>
                <IoIosCloseCircleOutline
                  onClick={closePopup}
                  color="#d87871"
                  size={22}
                  className={globalStyles.icon}
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export { PopupProvider, PopupContext, PopUp };
