import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Instruction from './components/Instruction/Instruction';

import styled from 'styled-components';
import './app.scss';

const Container = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid black;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  justify-content: space-between;
  border-left: 1px solid black;
`;

const Right = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid black;
  height: 100%;
`;

const Root = styled.div`
  height: 99vh;
`;

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
      <Container>
        <Left>
          <Header addCard={addCard} sortCards={sortCards} />
          <Main cards={cards} removeCard={removeCard} />
          <Footer />
        </Left>
        <Right>
          <Instruction />
        </Right>
      </Container>
    </Root>
  );
}

export default App;
