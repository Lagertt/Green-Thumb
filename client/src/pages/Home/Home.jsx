import React, { useContext, useEffect } from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Categories from '../../components/sections/Categories/Categories';
import BestCelling from '../../components/sections/BestCelling/BestCelling';
import HotNews from '../../components/sections/HotNews/HotNews';
import FantasticDeals from '../../components/sections/FantasticDeals/FantasticDeals';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchTypes, fetchPlants } from '../../API/plantAPI';

const Home = observer(() => {
  const { plant } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => plant.setTypes(data));
    fetchPlants().then((data) => plant.setPlants(data.rows));
  }, []);

  return (
    <>
      <Hero />

      <Categories items={plant.types} />

      <BestCelling />

      {/* {plant.plants.length && <HotNews items={plant.plants.slice(4, 8)} />} */}

      {plant.plants.length && (
        <FantasticDeals items={plant.plants.filter((item) => item.discount > 0).splice(0, 4)} />
      )}
    </>
  );
});

export default Home;
