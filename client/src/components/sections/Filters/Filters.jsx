import React, { useState } from 'react';
import cl from './Filters.module.scss';
import Button from '../../Button/Button';
import { ChevronUp } from 'lucide-react';

function Filters({ types, prices, value, onChange }) {
  const [visibleSections, setVisibleSections] = useState(new Array(2).fill(true));

  const toggleList = (index) => {
    visibleSections[index] = !visibleSections[index];
    setVisibleSections([...visibleSections]);
  };

  const changeValue = () => {
    onChange(value);
  };

  return (
    <section className={cl.filters}>
      <form className={cl.form}>
        <legend className={cl.legend}>
          <button type="button" className={cl.toggle} onClick={() => toggleList(0)}>
            <ChevronUp className={visibleSections[0] ? cl.rotated : ''} />
            Категории
          </button>
        </legend>
        <ul className={`${cl.list} ${visibleSections[0] ? cl.hidden : ''}`}>
          {types &&
            types.map((type, index) => (
              <li
                className={cl.item}
                key={index}
                onClick={() => {
                  value.type = type.id;
                  changeValue();
                }}
              >
                {type.name}
              </li>
            ))}
        </ul>
      </form>
      {prices && (
        <form className={cl.form}>
          <div className={cl.legend}>
            <button type="button" className={cl.toggle} onClick={() => toggleList(1)}>
              <ChevronUp className={visibleSections[1] ? cl.rotated : ''} />
              Цена
            </button>
          </div>
          <div className={`${cl.inputs} ${visibleSections[1] ? cl.hidden : ''}`}>
            <div className={cl.price}>
              <label htmlFor="price_from">От: </label>
              <input
                type="number"
                name="price_from"
                placeholder={prices.minPrice}
                onChange={(ev) => {
                  value.price_from = ev.target.value;
                  changeValue();
                }}
              />
            </div>
            <div className={cl.price}>
              <label htmlFor="price_up">До: </label>
              <input
                type="number"
                name="price_up"
                placeholder={prices.maxPrice}
                onChange={(ev) => {
                  if (ev.target.value == 0) value.price_to = Number.MAX_SAFE_INTEGER;
                  else value.price_to = ev.target.value;
                  changeValue();
                }}
              />
            </div>
          </div>
          {/* <button type="button" onClick={() => onChangeValue(value)}>
            kdfjvn
          </button> */}
        </form>
      )}
    </section>
  );
}

export default Filters;
