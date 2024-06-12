import React, { createContext, useEffect, useState } from "react";

interface GlobalContextProps {
  category: string;
  setCategory: (category: string) => void;
  componentType: string;
  setComponentType: (componentType: string) => void;
  askConfirmation: boolean;
  setAskConfirmation: (askConfirmation: boolean) => void;
  gridColumns: number;
  setGridColumns: (gridColumns: number) => void;
  colorTheme: string;
  setColorTheme: (colorTheme: string) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
  category: "React",
  setCategory: () => {},
  componentType: "Functional",
  setComponentType: () => {},
  askConfirmation: false,
  setAskConfirmation: () => {},
  gridColumns: 3,
  setGridColumns: () => {},
  colorTheme: "palenight",
  setColorTheme: () => {},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string>("React");
  const [componentType, setComponentType] = useState<string>("Functional");
  const [askConfirmation, setAskConfirmation] = useState<boolean>(false);
  const [gridColumns, setGridColumns] = useState<number>(3);
  const [colorTheme, setColorTheme] = useState<string>("palenight");

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
      value={{
        category,
        setCategory,
        componentType,
        setComponentType,
        askConfirmation,
        setAskConfirmation,
        gridColumns,
        setGridColumns,
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
