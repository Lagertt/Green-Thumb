import React from 'react';
import cl from './PlantCard.module.scss';
import Button from '../Button/Button';
import img from '../../assets/img/plant.jpg';

function PlantCard({ name, price, discount = 0 }) {
  function getDiscountPrice(price, discount) {
    return price - (price / 100) * discount;
  }

  return (
    <action className={cl.card}>
      <div className={cl.img}>
        <img src={img} alt="" />
      </div>
      <div className={cl.info}>
        <h3 className={cl.name}>{name}</h3>
        {discount === 0 ? (
          <p className={cl.price}>&#36; {price}</p>
        ) : (
          <p className={cl.price}>
            &#36; {getDiscountPrice(price, discount)}
            <span>&#36; {price}</span>
          </p>
        )}
      </div>

      <Button>Купить</Button>
    </action>
  );
}

export default PlantCard;
