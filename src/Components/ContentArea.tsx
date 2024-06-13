import { useContext } from "react";
import styles from "../Styles/Home.module.css";
import { GlobalContext } from "../Context/GlobalContext";
import ContainerCard from "./ContainerCard";

interface Props {
  heading: string;
}

const ContentArea: React.FC<Props> = ({ heading }) => {
  const { gridColumns } = useContext(GlobalContext);

  return (
    <div className={styles.contentArea}>
      <div className={styles.contentHeading}>
        <h3>{heading}</h3>
      </div>
      <div
        className={styles.contentGrid}
        style={{ gridTemplateColumns: `repeat(${gridColumns},auto)` }}
      >
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
      </div>
    </div>
  );
};

export default ContentArea;
