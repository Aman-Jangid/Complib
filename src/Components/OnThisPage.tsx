import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import { v4 as uuidv4 } from "uuid";

import styles from "../Styles/Home.module.css";
import stylesGlobal from "../Styles/Global.module.css";

import { GlobalContext } from "../Context/GlobalContext";

import IndexItemGroup from "./IndexItemGroup";

import data from "../mock/data";
import DeletePopUp from "./DeletePopUp";

interface Component {
  id: string;
  title: string;
  items: { id: string; title: string }[];
  editing: boolean;
  empty: boolean;
  timeCreated: Date;
}

function OnThisPage() {
  const [activeItemId, setActiveItemId] = useState<string>("");
  const [index, setIndex] = useState<Component[]>(
    data.map((comp) => ({
      ...comp,
      id: uuidv4(),
      items: comp.items.map((item) => ({ ...item, id: uuidv4() })),
    }))
  );

  // context
  const { setComponentType } = useContext(GlobalContext);

  const setActive = (id: string) => {
    setActiveItemId(id);

    // find the title of the active item using id
    const activeItem = index
      .map((comp) => comp.items.find((item) => item.id === id))
      .find((item) => item);

    if (activeItem) {
      setComponentType(activeItem.title);
    }
  };

  const handleRename = (
    name: string,
    id: string,
    isEmpty: boolean,
    items?: { id: string; title: string }[]
  ) => {
    if (!name) return;
    let tempList = [...index];
    const component = tempList.find((item) => item.id === id);
    if (component) {
      component.items = items ? items : component.items;
      component.title = name;
      component.editing = false;
      component.empty = isEmpty;
      component.timeCreated = new Date();
    }
    setIndex(tempList);
  };

  const handleAddComponent = () => {
    const newComponent: Component = {
      id: uuidv4(),
      title: "NewComp" + index.length,
      items: [],
      editing: true,
      empty: true,
      timeCreated: new Date(),
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

  const handleDeleteComponent = (id: string) => {
    let tempList = [...index];
    const newItems = tempList.filter((item) => item.id !== id);
    setIndex(newItems);
  };

  useEffect(() => {
    const id = index[0].items[0].id;
    setActive(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.onThisPage}>
      <DeletePopUp />
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
              activeItemId={activeItemId}
              handleItemClick={setActive}
              editing={editing}
              handleRename={handleRename}
              handleEditGroup={handleEditComponent}
              handleDeleteGroup={handleDeleteComponent}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default OnThisPage;
