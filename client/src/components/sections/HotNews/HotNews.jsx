import React from 'react';
import cl from './HotNews.module.scss';
import Container from '../../Container/Container';
import SectionTitle from '../../SectionTitle/SectionTitle';
import PlantCard from '../../PlantCard/PlantCard';

function HotNews() {
  return (
    <section className={cl.container}>
      <Container>
        <SectionTitle title="Горячие новинки" haveButton={true}></SectionTitle>
        <div className={cl.cards}>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
          <PlantCard name="Neon Photos" price="350"></PlantCard>
        </div>
      </Container>
    </section>
  );
}

export default HotNews;
