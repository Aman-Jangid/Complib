import { useContext, useEffect } from "react";

import styles from "../Styles/Home.module.css";

import ContentArea from "../Components/ContentArea";
import Header from "../Components/Header";
import OnThisPage from "../Components/OnThisPage";
import Sidebar from "../Components/Sidebar";

import { GlobalContext } from "../Context/GlobalContext";

function Home() {
  const { componentType, setWidth } = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
