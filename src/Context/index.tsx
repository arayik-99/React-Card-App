import { createContext, useState } from "react";
import { Card } from "../types";
import { AppContextProviderProps, ContextProps } from "./types";

export const AppContext = createContext<ContextProps>({
  addCard: () => {},
  cards: [{ num: 0 }],
  deleteCard: (id: number) => {},
  sortCards: () => {},
});

const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [cards, setCards] = useState<Array<Card>>([]);

  const addCard = () => {
    const newCards = [...cards];
    const randomNum = Math.floor(Math.random() * 1000);
    const card = { num: randomNum };
    newCards.push(card);
    setCards(newCards);
  };

  const sortCards = () => {
    const newCards = [...cards];
    newCards.sort((a, b) => a.num - b.num);
    setCards(newCards);
  };

  const deleteCard = (id: number) => {
    const newCards = [...cards];
    newCards.splice(id, 1);
    setCards(newCards);
  };

  return (
    <AppContext.Provider value={{ cards, addCard, deleteCard, sortCards }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
