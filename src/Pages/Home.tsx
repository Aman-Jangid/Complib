import ContentArea from "../Components/ContentArea";
import Header from "../Components/Header";
import OnThisPage from "../Components/OnThisPage";
import Sidebar from "../Components/Sidebar";
import styles from "../Styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.onThisPageSection}>
          <OnThisPage />
        </div>
        <ContentArea />
        <div className={styles.sidebarSection}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
