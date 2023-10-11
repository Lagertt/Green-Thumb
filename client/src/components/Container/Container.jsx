import React from 'react';
import cl from './Container.module.scss';

function Container({ children, className }) {
  return <div className={`${cl.container} ${className}`}>{children}</div>;
}

export default Container;
