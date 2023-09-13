import React from 'react';
import cl from './Button.module.scss';

function Button({ text, action, light }) {
  const classNamesStr = light ? `${cl.button} ${cl.light}` : `${cl.button}`;
  return (
    <button className={classNamesStr} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
