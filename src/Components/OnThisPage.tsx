import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { FaPlus } from "react-icons/fa6";

import IndexItemGroup from "./IndexItemGroup";
import { useState } from "react";

const indexArr: Array<Object> = [
  {
    Buttons: [
      "Icon Buttons",
      "Image Buttons",
      "Radio Buttons",
      "CheckBoxes",
      "Switches",
    ],
    editing: false,
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
    editing: false,
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
    editing: false,
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
    editing: false,
    key: 3,
  },
];

function OnThisPage() {
  const [activeItem, setActiveItem] = useState<String>("");
  const [index, setIndex] = useState<Array<Object>>(indexArr);

  const setActive = (item: String) => {
    setActiveItem(item);
  };

  const handleRename = (name: string, key: number) => {
    let tempIndex = [...index];
    // check if the array in the object is empty.

    const newComponent = { [name]: [], editing: false, key: key };
    tempIndex[key] = newComponent;
    // }
    setIndex(tempIndex);
  };

  const handleAddComponent = () => {
    setIndex([
      ...index,
      { ["component" + index.length]: [], editing: true, key: index.length },
    ]);
    // }
  };

  const handleEditComponent = (i: number) => {
    let item = index[i];
    let tempList = [...index];
    tempList[i] = { ...item, editing: true };
    setIndex(tempList);
  };

  return (
    <div className={styles.onThisPage}>
      <ul>
        <div className={styles.indexHeading}>
          <h3 className={styles.indexHeadingText}>Components</h3>
          <FaPlus
            size={22}
            className={stylesGlobal.icon}
            onClick={handleAddComponent}
          />
        </div>
        <div className={styles.indexItemsGroup}>
          {index.map((obj: Object) => (
            <IndexItemGroup
              heading={Object.keys(obj)[0]}
              items={Object.values(obj)[0]}
              key={Object.values(obj)[2]}
              activeItem={activeItem}
              handleItemClick={setActive}
              editing={Object.values(obj)[1]}
              handleRename={handleRename}
              handleEditGroup={handleEditComponent}
              currentIndex={Object.values(obj)[2]}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
