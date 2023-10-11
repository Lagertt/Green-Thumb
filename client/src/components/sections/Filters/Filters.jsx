import React, { useState } from 'react';
import cl from './Filters.module.scss';

function Filters({ types, prices }) {
  const [visibleSections, setVisibleSections] = useState(new Array(2).fill(true));

  function toggleList(index) {
    visibleSections[index] = !visibleSections[index];
    setVisibleSections([...visibleSections]);
  }

  return (
    <section className={cl.filters}>
      <form className={cl.form}>
        <legend className={cl.legend}>
          <button type="button" className={cl.toggle} onClick={() => toggleList(0)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={visibleSections[0] ? cl.rotated : ''}
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
            Категории
          </button>
        </legend>
        <ul className={`${cl.list} ${visibleSections[0] ? cl.hidden : ''}`}>
          {types &&
            types.map((type, index) => (
              <li className={cl.item} key={index}>
                {type.name}
              </li>
            ))}
        </ul>
      </form>

      <form className={cl.form}>
        <div className={cl.legend}>
          <button type="button" className={cl.toggle} onClick={() => toggleList(1)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={visibleSections[1] ? cl.rotated : ''}
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
            Цена
          </button>
        </div>
        <div className={`${cl.inputs} ${visibleSections[1] ? cl.hidden : ''}`}>
          <div className={cl.price}>
            <label htmlFor="price_from">От: </label>
            <input type="number" name="price_from" placeholder={prices.minPrice} />
          </div>
          <div className={cl.price}>
            <label htmlFor="price_up">До: </label>
            <input type="number" name="price_up" placeholder={prices.maxPrice} />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Filters;
