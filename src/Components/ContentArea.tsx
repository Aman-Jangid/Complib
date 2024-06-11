// import { useContext } from "react";
// import { PopupContext } from "../Context/PopupContext";
import styles from "../Styles/Home.module.css";
// import DeletePopUp from "./DeletePopUp";
// import IconButton from "./IconButton";
// import ReactContainer from "./ReactContainer";

interface Props {
  heading: string;
}

const ContentArea: React.FC<Props> = ({ heading }) => {
  // const code = (
  //   <div>
  //     <IconButton
  //       active={false}
  //       backgroundColor="#7077A1"
  //       color="white"
  //       width="150%"
  //       height="44px"
  //       iconPack="tb"
  //       iconName="TbBrandFlutter"
  //       textColor="white"
  //       text="Flutter"
  //     />
  //   </div>
  // );

  // const { setShowPopup } = useContext(PopupContext);

  return (
    <div className={styles.contentArea}>
      {/* {<DeletePopUp />} */}
      <div className={styles.contentHeading}>
        <h3
        // onClick={() => setShowPopup(true)}
        >
          {heading}
        </h3>
      </div>
      <div className={styles.contentGrid}>
        {/* <ReactContainer Code={() => code} /> */}
      </div>
    </div>
  );
};

export default ContentArea;
