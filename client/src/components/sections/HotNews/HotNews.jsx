import React from 'react';
import cl from './HotNews.module.scss';
import Container from '../../Container/Container';
import SectionTitle from '../../SectionTitle/SectionTitle';
import PlantCard from '../../PlantCard/PlantCard';

function HotNews({ items }) {
  return (
    <section className={cl.container}>
      <Container>
        <SectionTitle title="Горячие новинки" haveButton={true}></SectionTitle>
        <div className={cl.cards}>
          {items.length &&
            items.map((plant, index) => <PlantCard plant={plant} key={index}></PlantCard>)}
        </div>
      </Container>
    </section>
  );
}

export default HotNews;
