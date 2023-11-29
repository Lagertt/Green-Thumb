import React from 'react';
import cl from './MarketingLine.module.scss';
import Container from '../Container/Container';

function MarketingLine({ text }) {
  return (
    <section className={cl.cont}>
      <Container>
        <div className={cl.line}>{text}</div>
      </Container>
    </section>
  );
}

export default MarketingLine;
