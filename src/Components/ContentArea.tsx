import { useContext } from "react";
import styles from "../Styles/Home.module.css";
import { GlobalContext } from "../Context/GlobalContext";
import ContainerCard from "./ContainerCard";

interface Props {
  heading: string;
}

const components = [
  {
    id: 0,
    name: "Card",
    languages: ["jsx", "css"],
    code: [
      [
        `
        import React from 'react';
        import styles from './Card.module.css';
        
        const Card: React.FC = () => {
          const handleClick = () => {
            alert('Button clicked!');
          };
        
          return (
            <div className={styles.card}>
              <div className={styles.cardTitle}>Card Title</div>
              <button className={styles.cardButton} onClick={handleClick}>
                Click Me
              </button>
            </div>
          );
        };
        
        export default Card;
        `,
      ],
      [
        `/* Card.module.css */

        .card {
          width: 300px;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        
        .cardTitle {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        
        .cardButton {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .cardButton:hover {
          background-color: #0056b3;
        }
        `,
      ],
    ],
  },
];

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
        <ContainerCard
          code={components[0].code}
          languages={components[0].languages}
          title={components[0].name}
        />
      </div>
    </div>
  );
};

export default ContentArea;
