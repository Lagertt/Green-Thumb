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

  const [selectedFilters, setSelectedFilters] = useState({
    price_from: 0,
    price_to: Number.MAX_SAFE_INTEGER,
    type: 0,
  });
  const [filtredPlants, setFiltredPlants] = useState([]);

  const [selectedSort, setSelectedSort] = useState('name');

  const getPrices = () => {
    const minPlantPrice = Math.min(...plant.plants.map((item) => item.price));
    const maxPlantPrice = Math.max(...plant.plants.map((item) => item.price));
    return { minPrice: minPlantPrice, maxPrice: maxPlantPrice };
  };

  const sortPlants = (sort, array = filtredPlants) => {
    setSelectedSort(sort);
    let newSortedPlants = [...array];
    switch (sort) {
      case 'name':
        newSortedPlants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price_up':
        newSortedPlants.sort((a, b) => a.price - b.price);
        break;
      case 'price_down':
        newSortedPlants.sort((a, b) => b.price - a.price);
        break;
    }
    setFiltredPlants(newSortedPlants);
    return newSortedPlants;
  };

  const filterPlants = (filters) => {
    setSelectedFilters(filters);
    let newFilteredPlants = [...plant.plants].filter(
      (item) =>
        (item.typeId === filters.type || filters.type === 0) &&
        item.price >= filters.price_from &&
        item.price <= filters.price_to
    );
    setFiltredPlants(sortPlants(selectedSort, newFilteredPlants));
  };

  // useEffect(() => {
  //   console.log(selectedSort, selectedFilters);
  //   sortPlants(selectedSort);
  // }, [selectedFilters, selectedSort]);

  useEffect(() => {
    fetchTypes().then((data) => plant.setTypes(data));
    fetchPlants().then((data) => plant.setPlants(data.rows));
  }, []);

  useEffect(() => {
    if (plant.plants.length) {
      setPrices(getPrices());
      filterPlants(selectedFilters);
    }
  }, [plant.plants.length]);

  return (
    <>
      <PageName name="Магазин" descr="Найдите идеальное растение для вашего помещения" />
      <Container>
        <div className={cl.top}>
          <p className={cl.count}>
            Найдено <span>{filtredPlants.length} товаров</span>{' '}
          </p>
          <SortPopup
            value={selectedSort}
            onChange={(sort) => sortPlants(sort)}
            items={[
              { name: 'названию', value: 'name' },
              { name: 'цене по убыванию', value: 'price_down' },
              { name: 'цене по возрастанию', value: 'price_up' },
            ]}
          />
        </div>

        <div className={cl.main}>
          <Filters
            types={[{ id: 0, name: 'все' }, ...plant.types]}
            prices={prices}
            value={selectedFilters}
            onChange={(filters) => filterPlants(filters)}
          />
          <section className={cl.plants}>
            {filtredPlants.length
              ? filtredPlants.map((item, index) => <PlantCard key={index} plant={item} />)
              : 'Товаров не найдено'}
          </section>
        </div>
      </Container>
    </>
  );
});

export default Shop;
