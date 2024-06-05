import styles from "../Styles/Home.module.css";

import { FaPlus } from "react-icons/fa6";

import IndexItemGroup from "./IndexItemGroup";

const index: Array<Object> = [
  {
    Buttons: [
      "Icon Buttons",
      "Image Buttons",
      "Radio Buttons",
      "CheckBoxes",
      "Switches",
    ],
  },
  {
    Cards: [
      "Outlined Cards",
      "Media Cards",
      "Video Cards",
      "Collapsible Cards",
      "Image Cards",
      "Menu Card",
      "Post Card",
      "Animated Card",
      "Grid Card",
    ],
  },
  {
    Navigation: [
      "Back-Links",
      "Forward-Links",
      "Pagination",
      "Indexes",
      "Link Containers",
    ],
  },
  {
    Carousels: [
      "Image Carousels",
      "Product Carousels",
      "Content Carousels",
      "Testimonial Carousels",
      "Interactive Carousels",
      "News Carousels",
    ],
  },
];

function OnThisPage() {
  return (
    <div className={styles.onThisPage}>
      <ul>
        <div className={styles.indexHeading}>
          <h3 className={styles.indexHeadingText}>Components</h3>
          <FaPlus size={22} />
        </div>
        <div
          style={{
            borderLeft: "1px solid #424769",
            overflowY: "auto",
          }}
        >
          {index.map((obj: Object) => (
            <IndexItemGroup
              heading={Object.keys(obj)[0]}
              items={Object.values(obj)[0]}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
