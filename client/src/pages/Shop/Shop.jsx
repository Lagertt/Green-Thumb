import React, { useContext, useEffect, useState } from 'react';
import cl from './Shop.module.scss';
import PageName from '../../components/sections/PageName/PageName';
import PlantCard from '../../components/PlantCard/PlantCard';
import Container from '../../components/Container/Container';
import SortPopup from '../../components/SortPopup/SortPopup';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchTypes, fetchPlants } from '../../API/plantAPI';
import Filters from '../../components/sections/Filters/Filters';

const Shop = observer(() => {
  const { plant } = useContext(Context);
  const [prices, setPrices] = useState({ minPrice: 0, maxPrice: 0 });
  const [selectedSort, setSelectedSort] = useState(0);

  const getPrices = () => {
    const minPlantPrice = Math.min(...plant.plants.map((item) => item.price));
    const maxPlantPrice = Math.max(...plant.plants.map((item) => item.price));
    return { minPrice: minPlantPrice, maxPrice: maxPlantPrice };
  };

  useEffect(() => {
    fetchTypes().then((data) => plant.setTypes(data));
    fetchPlants().then((data) => plant.setPlants(data.rows));
    plant.plants.length && setPrices(getPrices());
  }, []);

  useEffect(() => {
    plant.plants.length && setPrices(getPrices());
  }, [plant.plants]);

  const sortPlants = (sort) => {
    setSelectedSort(sort);
    // setFilteredPersons([...filteredPersons].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <>
      <PageName name="Магазин" descr="Найдите идеальное растение для вашего помещения" />
      <Container>
        <div className={cl.top}>
          <p className={cl.count}>
            Найдено <span>{plant.plants.length} товаров</span>{' '}
          </p>
          <SortPopup
            value={selectedSort}
            onChange={sortPlants}
            items={[
              { name: 'названию', value: 'name' },
              { name: 'цене по убыванию', value: 'price_down' },
              { name: 'цене по возрастанию', value: 'price_up' },
            ]}
          />
        </div>

        <div className={cl.main}>
          <Filters types={plant.types} prices={prices} />
          <section className={cl.plants}>
            {plant.plants.length &&
              plant.plants.map((item, index) => <PlantCard key={index} plant={item} />)}
          </section>
        </div>
      </Container>
    </>
  );
});

export default Shop;
