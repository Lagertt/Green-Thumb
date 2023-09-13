import React from 'react';
import Header from '../../components/Header/Header';
import cl from './Home.module.scss';
import Button from '../../components/Button/Button';

function Home() {
  return (
    <>
      <Header
        title="Green Thumb"
        items={[
          { name: 'home', title: 'Главная' },
          { name: 'shop', title: 'Товары' },
          { name: 'news', title: 'Блог' },
          { name: 'contacts', title: 'Контакты' },
        ]}
      ></Header>
      <section className={cl.hero}>
        <div className={cl.wrapper}>
          <h1 className={cl.title}>Растения это наша страсть</h1>
          <p className={cl.descr}>Даже если вы не опытный садовод, вы сможете озеленить свой дом</p>
          <Button text="Приступить к посадке" light={true}></Button>
        </div>
      </section>
    </>
  );
}

export default Home;
