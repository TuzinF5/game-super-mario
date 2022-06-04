import React, { Component } from 'react';
import mario from '../images/mario.gif';
import pipe from '../images/pipe.png';
import '../styles/main.css';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      srcMario: mario,
      srcPipe: pipe,
    };
  }

  render() {
    const { srcMario, srcPipe } = this.state;

    return (
      <main className="main-game">
        <section className="game-board">
          <img className="img-mario" src={srcMario} alt="super mario" />
          <img className="img-pipe" src={srcPipe} alt="tubo super mario" />
        </section>
      </main>
    );
  }
}
