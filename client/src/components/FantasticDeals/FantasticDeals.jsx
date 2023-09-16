import React from 'react';
import cl from './FantasticDeals.module.scss';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import PlantCard from '../PlantCard/PlantCard';

function FantasticDeals() {
  return (
    <section className={cl.container}>
      <Container>
        <SectionTitle title="Фантастические скидки"></SectionTitle>
        <div className={cl.cards}>
          <PlantCard name="Neon Photos" price={350} discount={25}></PlantCard>
          <PlantCard name="Neon Photos" price={350} discount={25}></PlantCard>
          <PlantCard name="Neon Photos" price={350} discount={25}></PlantCard>
          <PlantCard name="Neon Photos" price={350} discount={25}></PlantCard>
        </div>
      </Container>
    </section>
  );
}

export default FantasticDeals;
