import { useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { FaPlus } from "react-icons/fa6";

import IndexItemGroup from "./IndexItemGroup";

import data from "../mock/data";

function OnThisPage() {
  const [activeItem, setActiveItem] = useState<String>("");
  const [index, setIndex] = useState(data);

  const setActive = (item: String) => {
    setActiveItem(item);
  };

  const handleRename = (
    name: string,
    key: number,
    isEmpty: boolean,
    items?: Array<String>
  ) => {
    let tempList = [...index];
    if (isEmpty) {
      const newComponent = {
        title: name,
        items: [],
        key: key,
        editing: false,
        empty: true,
      };

      tempList = tempList.filter((item) => item.editing === false);
      tempList.push(newComponent);
    } else {
      const Component = tempList.find((item) => item.key === key);
      if (Component) {
        Component.items = items ? items : Component.items;
        Component.title = name;
        Component.editing = false;
        tempList[key] = Component;
      }
      console.log(tempList);
    }
    setIndex(tempList);
  };

  const handleAddComponent = () => {
    const newComponent = {
      title: "NewComp" + index.length,
      items: [],
      key: index.length,
      editing: true,
      empty: true,
    };

    let tempIndex = [newComponent, ...index];

    setIndex(tempIndex);
  };

  const handleEditComponent = (i: number) => {
    const Component = index.find((item) => item.key === i);
    if (Component) {
      Component.editing = true;
    }

    let tempIndex = [...index];
    if (Component) {
      tempIndex[i] = Component;
    }
    setIndex(tempIndex);
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
          {index.map((group) => (
            <IndexItemGroup
              heading={group.title}
              items={group.items.map((item) => item.title)}
              key={group.key}
              activeItem={activeItem}
              handleItemClick={setActive}
              editing={group.editing}
              handleRename={handleRename}
              handleEditGroup={handleEditComponent}
              currentIndex={group.key}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
