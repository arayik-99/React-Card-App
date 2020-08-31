import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Instruction from './components/Instruction/Instruction';
import AppStyle from './components/Sides/AppStyle';
import Left from './components/Sides/Left';
import Right from './components/Sides/Right';
import Root from './components/Sides/Root';

import './app.scss';

function App() {
  const [cards, setCards] = useState([]);
  const rand = Math.floor(Math.random() * 101);

  function addCard() {
    setCards((prevCards) => {
      return [...prevCards, { id: cards.length + 1, randNum: rand }];
    });
  }

  function sortCards() {
    cards.sort((a, b) => {
      return a.randNum - b.randNum;
    });
    setCards([...cards]);
  }

  function removeCard(id) {
    cards.forEach((card, index) => {
      if (index === id) {
        cards.splice(index, 1);
      }
    });
    setCards([...cards]);
  }

  return (
    <Root>
      <AppStyle>
        <Left>
          <Header addCard={addCard} sortCards={sortCards} />
          <Main cards={cards} removeCard={removeCard} />
          <Footer />
        </Left>
        <Right>
          <Instruction />
        </Right>
      </AppStyle>
    </Root>
  );
}

export default App;
