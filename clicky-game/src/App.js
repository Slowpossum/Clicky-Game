import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Card from './components/Card';
import cardList from './cards.json';

const shuffle = arr => {
  let rand, holder;

  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    holder = arr[i];
    arr[i] = arr[rand];
    arr[rand] = holder;
  }

  return arr;
}

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    pickedCards: []
  };

  cardClickHandler = e => {
    let chosenCard = e.target.alt;
    let newState;

    if (this.state.pickedCards.indexOf(chosenCard) === -1) {
      document.getElementById("info").innerText = "Correct!";

      document.getElementById("info").classList.add("correct");
      setTimeout(() => {
        document.getElementById("info").classList.remove("correct");
      }, 505);

      newState = {
        score: this.state.score + 1,
        pickedCards: this.state.pickedCards
      }
      newState.pickedCards.push(chosenCard);

      this.setState(newState);
    } else {
      document.getElementById("info").innerText = "Wrong!";

      document.getElementById("info").classList.add("incorrect");
      setTimeout(() => {
        document.getElementById("info").classList.remove("incorrect");
      }, 505);

      let allCards = document.querySelectorAll(".card");
      for (let card of allCards) {
        card.classList.add("cardShake");
      }
      setTimeout(() => {
        let allCards = document.querySelectorAll(".cardShake");
        for (let card of allCards) {
          card.classList.remove("cardShake");
        }
      }, 505)

      if (this.state.score > this.state.highScore) {
        newState = {
          score: 0,
          highScore: this.state.score,
          pickedCards: []
        }
      } else {
        newState = {
          score: 0,
          pickedCards: []
        }
      }

      this.setState(newState);
    }
  }

  render() {
    return (
      <>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Container>
          {shuffle(cardList).map(card => {
            return <Card onClick={this.cardClickHandler} image={card.image} key={card.id} alt={card.alt} />
          })}
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
