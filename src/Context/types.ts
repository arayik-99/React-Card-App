import { ReactNode } from 'react';
import { Card } from '../types';

export interface AppContextProviderProps {
  children: ReactNode
}

export interface ContextProps {
  cards: Array<Card>;
  addCard: () => void;
  sortCards: () => void;
  deleteCard: (id: number) => void;
}
