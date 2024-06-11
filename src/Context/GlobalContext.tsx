import React, { createContext, useEffect, useState } from "react";

interface GlobalContextProps {
  category: string;
  setCategory: (category: string) => void;
  componentType: string;
  setComponentType: (componentType: string) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  category: "React",
  setCategory: () => {},
  componentType: "Functional",
  setComponentType: () => {},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string>("React");
  const [componentType, setComponentType] = useState<string>("Functional");

  // get category from local storage
  useEffect(() => {
    const category = localStorage.getItem("category");
    if (category) {
      setCategory(category);
    }
  }, []);

  // set category to local storage
  useEffect(() => {
    if (!category) return;
    localStorage.setItem("category", category);
  }, [category]);

  return (
    <GlobalContext.Provider
      value={{ category, setCategory, componentType, setComponentType }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
