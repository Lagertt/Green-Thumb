import React from 'react';
import cl from './Hero.module.scss';
import Button from '../../../components/Button/Button';

function Hero() {
  return (
    <section className={cl.hero}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>Укрась свой дом зеленью от нас!</h1>
        <p className={cl.descr}>Даже если вы не опытный садовод, вы сможете озеленить свой дом</p>
        <Button light={true}>Приступить к посадке</Button>
      </div>
    </section>
  );
}

export default Hero;
