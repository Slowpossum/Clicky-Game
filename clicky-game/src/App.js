import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Card from './components/Card';
import cardList from './cards.json';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    pickedCards: []
  }

  cardClickHandler() {
    console.log("yep, you clicked me.");
  }

  render() {
    return (
      <>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Container>
          {cardList.map(card => {
            return <Card onClick={this.cardClickHandler} image={card.image} key={card.id} alt={card.alt} />
          })}
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
