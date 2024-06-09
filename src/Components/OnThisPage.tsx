import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";
import { FaPlus } from "react-icons/fa";
import IndexItemGroup from "./IndexItemGroup";
import data from "../mock/data";

interface Component {
  id: string;
  title: string;
  items: { id: string; title: string }[];
  editing: boolean;
  empty: boolean;
}

function OnThisPage() {
  const [activeItem, setActiveItem] = useState<string>("");
  const [index, setIndex] = useState<Component[]>(
    data.map((comp) => ({
      ...comp,
      id: uuidv4(),
      items: comp.items.map((item) => ({ ...item, id: uuidv4() })),
    }))
  );

  const setActive = (item: string) => {
    setActiveItem(item);
  };

  const handleRename = (
    name: string,
    id: string,
    isEmpty: boolean,
    items?: { id: string; title: string }[]
  ) => {
    let tempList = [...index];
    const component = tempList.find((item) => item.id === id);
    if (component) {
      component.items = items ? items : component.items;
      component.title = name;
      component.editing = false;
      component.empty = isEmpty;
    }
    setIndex(tempList);
    // if (isEmpty) {
    //   const newComponent: Component = {
    //     id: uuidv4(),
    //     title: name,
    //     items: [],
    //     editing: false,
    //     empty: isEmpty,
    //   };

    //   tempList = tempList.filter((item) => item.editing === false);
    //   tempList.push(newComponent);
    // } else {
    //   const component = tempList.find((item) => item.id === id);
    //   if (component) {
    //     component.items = items ? items : component.items;
    //     component.title = name;
    //     component.editing = false;
    //   }
    // }
    // setIndex(tempList);
  };

  const handleAddComponent = () => {
    const newComponent: Component = {
      id: uuidv4(),
      title: "NewComp" + index.length,
      items: [],
      editing: true,
      empty: true,
    };

    let tempIndex = [newComponent, ...index];
    setIndex(tempIndex);
  };

  const handleEditComponent = (id: string) => {
    let tempList = [...index];
    const component = tempList.find((item) => item.id === id);
    if (component) {
      component.editing = true;
    }
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
          {index.map(({ id, title, items, editing }) => (
            <IndexItemGroup
              key={id}
              id={id}
              heading={title}
              items={items}
              activeItem={activeItem}
              handleItemClick={setActive}
              editing={editing}
              handleRename={handleRename}
              handleEditGroup={handleEditComponent}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
