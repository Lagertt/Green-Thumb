import React from 'react';
import cl from './Button.module.scss';

function Button({ children, action, light }) {
  const classNamesStr = light ? `${cl.button} ${cl.light}` : `${cl.button}`;
  return (
    <button className={classNamesStr} onClick={action}>
      {children}
    </button>
  );
}

export default Button;
