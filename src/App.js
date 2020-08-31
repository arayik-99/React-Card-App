import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Instruction from './components/Instruction/Instruction';

import './app.scss';

function App() {
  const [cards, setCards] = useState([]);
  const rand = Math.floor(Math.random() * 101);

  function addCard() {
    setCards((prevCards) => {
      return [...prevCards, rand];
    });
  }

  function sortCards() {
    cards.sort((a, b) => a - b);
    const newArr = [...cards];
    setCards(newArr);
  }

  return (
    <div className='app'>
      <div className='left'>
        <Header addCard={addCard} sortCards={sortCards} />
        <Main cards={cards} />
        <Footer />
      </div>
      <div className='right'>
        <Instruction />
      </div>
    </div>
  );
}

export default App;
