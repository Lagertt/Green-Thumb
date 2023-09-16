import React from 'react';
import Header from '../../components/Header/Header';
import cl from './Home.module.scss';

import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import BestCelling from '../../components/BestCelling/BestCelling';
import Footer from '../../components/Footer/Footer';
import HotNews from '../../components/HotNews/HotNews';
import FantasticDeals from '../../components/FantasticDeals/FantasticDeals';

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

      <Hero></Hero>

      <Categories></Categories>

      <BestCelling></BestCelling>

      <HotNews></HotNews>

      <FantasticDeals></FantasticDeals>

      <Footer></Footer>
    </>
  );
}

export default Home;
