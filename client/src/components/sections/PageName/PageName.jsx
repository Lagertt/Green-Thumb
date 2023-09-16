import React from 'react';
import cl from './PageName.module.scss';
import Container from '../../../components/Container/Container';

function PageName({ name, descr }) {
  return (
    <section className={cl.container}>
      <Container>
        <div className={cl.top}>
          <h2 className={cl.title}>{name}</h2>
          <p className={cl.descr}>{descr}</p>
        </div>
      </Container>
    </section>
  );
}

export default PageName;
