import styles from "../Styles/Home.module.css";

import { FaPlus } from "react-icons/fa6";

import IndexItemGroup from "./IndexItemGroup";
import { useState } from "react";

const index: Array<Object> = [
  {
    Buttons: [
      "Icon Buttons",
      "Image Buttons",
      "Radio Buttons",
      "CheckBoxes",
      "Switches",
    ],
    key: 0,
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
    key: 1,
  },
  {
    Navigation: [
      "Back-Links",
      "Forward-Links",
      "Pagination",
      "Indexes",
      "Link Containers",
    ],
    key: 2,
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
    key: 3,
  },
];

function OnThisPage() {
  // 2d array - first element is the category, second element is the list
  const [activeItem, setActiveItem] = useState<String>("");

  const setActive = (item: String) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.onThisPage}>
      <ul>
        <div className={styles.indexHeading}>
          <h3 className={styles.indexHeadingText}>Components</h3>
          <FaPlus size={22} />
        </div>
        <div className={styles.indexItemsGroup}>
          {index.map((obj: Object) => (
            <IndexItemGroup
              heading={Object.keys(obj)[0]}
              items={Object.values(obj)[0]}
              key={Object.values(obj)[1]}
              activeItem={activeItem}
              handleItemClick={setActive}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
