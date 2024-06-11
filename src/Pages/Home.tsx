import { useContext } from "react";

import styles from "../Styles/Home.module.css";

import ContentArea from "../Components/ContentArea";
import Header from "../Components/Header";
import OnThisPage from "../Components/OnThisPage";
import Sidebar from "../Components/Sidebar";

import { GlobalContext } from "../Context/GlobalContext";

function Home() {
  const { componentType } = useContext(GlobalContext);

  return (
    <div className={styles.home}>
      <div>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.onThisPageSection}>
          <OnThisPage />
        </div>
        <ContentArea heading={componentType} />
        <div className={styles.sidebarSection}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
