import React, { useEffect, useContext } from 'react';
import PageName from '../../components/sections/PageName/PageName';
import Container from '../../components/Container/Container';
import cl from './Plant.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchOnePlant } from '../../API/plantAPI';
import { useHref } from 'react-router-dom';

const Plant = observer(() => {
  const { plant } = useContext(Context);
  const plantId = useHref().split('/').at(-1);

  useEffect(() => {
    fetchOnePlant(plantId).then((data) => plant.setPlants(data));
  }, []);

  return (
    <>
      <PageName name="Магазин" descr={plant.plants.name} />
      <Container></Container>
    </>
  );
});

export default Plant;
