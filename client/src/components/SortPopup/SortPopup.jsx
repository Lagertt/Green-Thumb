import React, { useEffect, useRef, useState } from 'react';
import cl from './SortPopup.module.scss';

function SortPopup({ items, onChange, value }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const activeLabel = items[activeItem].name;

  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  const hadleOutsideClick = (event) => {
    if (!event.composedPath().includes(sortRef.current)) setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', hadleOutsideClick);
  }, []);

  useEffect(() => {
    value = items[activeItem].value;
    onChange(value);
  }, [activeItem]);

  return (
    <div ref={sortRef} className={cl.sort}>
      <div className={cl.title} onClick={toggleVisiblePopup}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={!visiblePopup ? cl.rotated : ''}
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        Сортировать по: <span>{activeLabel}</span>
      </div>
      <ul className={`${cl.list} ${!visiblePopup ? cl.hidden : ''}`}>
        {items.map((item, index) => (
          <li
            className={`${cl.item} ${activeLabel === item.name ? cl.active : ''}`}
            onClick={() => onSelectItem(index)}
            key={`${item.name}_${index}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPopup;
