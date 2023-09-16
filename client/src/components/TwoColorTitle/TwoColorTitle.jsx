import React from 'react';
import cl from './TwoColorTitle.module.scss';

function TwoColorTitle({ title }) {
  const firstWord = title.split(' ')[0];
  const str = title.split(' ').slice(1).join(' ');

  return (
    <>
      <span className={cl.span}>{firstWord}</span> {str}
    </>
  );
}

export default TwoColorTitle;
