import React, { Component } from 'react';
import mario from '../images/mario.gif';
import pipe from '../images/pipe.png';
import '../styles/main.css';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      classMario: 'img-mario',
      srcMario: mario,
      srcPipe: pipe,
    };
  }

  setClass(event, typeEvent, key) {
    if (event.key === key || typeEvent === 'touchend') {
      this.setState(() => {
        return { classMario: 'img-mario mario-jump' };
      });
    }
  }

  eventListener(typeEvent, key = null) {
    window.addEventListener(typeEvent, (event) =>
      this.setClass(event, typeEvent, key)
    );
  }

  componentDidMount() {
    this.eventListener('keydown', 'ArrowUp');
    this.eventListener('touchend');
  }

  render() {
    const { classMario, srcMario, srcPipe } = this.state;

    return (
      <main className="main-game">
        <section className="game-board">
          <img className={classMario} src={srcMario} alt="super mario" />
          <img className="img-pipe" src={srcPipe} alt="tubo super mario" />
        </section>
      </main>
    );
  }
}
