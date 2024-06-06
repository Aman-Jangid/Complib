import styles from "../Styles/Home.module.css";
// import IconButton from "./IconButton";
// import ReactContainer from "./ReactContainer";

const ContentArea = () => {
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

  return (
    <div className={styles.contentArea}>
      <div className={styles.contentHeading}>
        <h3>Post Cards</h3>
      </div>
      <div className={styles.contentGrid}>
        {/* <ReactContainer Code={() => code} /> */}
      </div>
    </div>
  );
};

export default ContentArea;
