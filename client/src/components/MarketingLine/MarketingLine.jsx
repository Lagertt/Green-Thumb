import React from 'react';
import cl from './MarketingLine.module.scss';

function MarketingLine({ text }) {
  return <div className={cl.line}>{text}</div>;
}

export default MarketingLine;
