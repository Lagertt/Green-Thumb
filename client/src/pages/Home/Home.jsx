import React from 'react';
import cl from './Home.module.scss';

import Header from '../../components/sections/Header/Header';
import Hero from '../../components/sections/Hero/Hero';
import Categories from '../../components/sections/Categories/Categories';
import BestCelling from '../../components/sections/BestCelling/BestCelling';
import Footer from '../../components/sections/Footer/Footer';
import HotNews from '../../components/sections/HotNews/HotNews';
import FantasticDeals from '../../components/sections/FantasticDeals/FantasticDeals';

function Home() {
  return (
    <>
      <Hero></Hero>

      <Categories></Categories>

      <BestCelling></BestCelling>

      <HotNews></HotNews>

      <FantasticDeals></FantasticDeals>
    </>
  );
}

export default Home;
