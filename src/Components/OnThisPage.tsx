import { useState } from "react";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { FaPlus } from "react-icons/fa6";

import IndexItemGroup from "./IndexItemGroup";

import data from "../mock/data";

interface Component {
  title: string;
  items: { title: string }[];
  key: number;
  editing: boolean;
  empty: boolean;
}

function OnThisPage() {
  const [activeItem, setActiveItem] = useState<string>("");
  const [index, setIndex] = useState<Component[]>(data);

  const setActive = (item: string) => {
    setActiveItem(item);
  };

  const handleRename = (
    name: string,
    key: number,
    isEmpty: boolean,
    items?: string[]
  ) => {
    let tempList = [...index];
    if (isEmpty) {
      const newComponent: Component = {
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
        Component.items = items
          ? items.map((item) => ({ title: item }))
          : Component.items;
        Component.title = name;
        Component.editing = false;
        tempList[key] = Component;
      }
      // console.log(tempList);
    }
    setIndex(tempList);
  };

  const handleAddComponent = () => {
    const newComponent: Component = {
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
          {index.map(({ title, items, key, editing }) => (
            <IndexItemGroup
              heading={title}
              items={items.map((item) => item.title)}
              key={key}
              activeItem={activeItem}
              handleItemClick={setActive}
              editing={editing}
              handleRename={handleRename}
              handleEditGroup={handleEditComponent}
              currentIndex={key}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
