import React from 'react';
import cl from './PlantCard.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import img from '../../assets/img/plant.jpg';
import { PLANT_ROUTE } from '../../utils/consts';

function PlantCard({ plant }) {
  function getDiscountPrice(price, discount) {
    return price - (price / 100) * discount;
  }

  return (
    <article className={cl.card}>
      <div className={cl.img}>
        <img src={process.env.REACT_APP_API_URL + plant.img[0]} alt="" />
      </div>
      <div className={cl.info}>
        <h3 className={cl.name}>{plant.name}</h3>
        {plant.discount === 0 ? (
          <p className={cl.price}>{plant.price} р.</p>
        ) : (
          <p className={cl.price}>
            {getDiscountPrice(plant.price, plant.discount)} р.
            <span>{plant.price} р.</span>
          </p>
        )}
      </div>
      <Link to={`${PLANT_ROUTE}/${plant.id}`}>
        <Button>Купить</Button>
      </Link>
    </article>
  );
}

export default PlantCard;
