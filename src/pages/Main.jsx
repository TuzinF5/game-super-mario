import React, { Component } from 'react';
import imgClouds from '../images/clouds.png';
import imgMario from '../images/mario.gif';
import imgMarioGameOver from '../images/game-over.png';
import imgPipe from '../images/pipe.png';

import '../styles/main.css';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      classMario: 'img-mario',
      srcClouds: imgClouds,
      srcMario: imgMario,
      srcPipe: imgPipe,
    };
  }

  resetClass() {
    setTimeout(() => {
      this.setState(() => {
        return { classMario: 'img-mario' };
      });
    }, 800);
  }

  setClass(event, typeEvent, key) {
    if (event.key === key || typeEvent === 'touchend') {
      this.setState(() => {
        return { classMario: 'img-mario mario-jump' };
      });
    }
    this.resetClass();
  }

  eventListener(typeEvent, key = null) {
    window.addEventListener(typeEvent, (event) =>
      this.setClass(event, typeEvent, key)
    );
  }

  checkImagePosition() {
    let pipe = document.querySelector('.img-pipe');
    let mario = document.querySelector('.img-mario');
    let clouds = document.querySelector('.img-clouds');

    const interval = setInterval(() => {
      let cloudsPosition = clouds.offsetLeft;
      let pipePosition = pipe.offsetLeft;
      let marioPosition = Number(
        window.getComputedStyle(mario).bottom.replace('px', '')
      );

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = imgMarioGameOver;
        mario.style.width = '75px';
        mario.style.height = '105px';
        mario.style.marginLeft = '40px';

        clearInterval(interval);
      }
    }, 1);
  }

  componentDidMount() {
    this.eventListener('keydown', 'ArrowUp');
    this.eventListener('touchend');
    this.checkImagePosition();
  }

  render() {
    const { classMario, srcClouds, srcMario, srcPipe } = this.state;

    return (
      <>
        <main className="main-game">
          <section className="game-board">
            <img className="img-clouds" src={srcClouds} alt="Nuvens" />
            <img className={classMario} src={srcMario} alt="super mario" />
            <img className="img-pipe" src={srcPipe} alt="tubo super mario" />
          </section>
        </main>
        <footer>
          <p>Desenvolvido por Arthur Teixeira</p>
        </footer>
      </>
    );
  }
}
