import React, { useState, useEffect, useContext } from 'react';
import { Link, useHref } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import PageName from '../../components/sections/PageName/PageName';
import Container from '../../components/Container/Container';
import cl from './Plant.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchOnePlant } from '../../API/plantAPI';
import { ChevronLeft } from 'lucide-react';
import Button from '../../components/Button/Button';

const Plant = observer(() => {
  const { plant } = useContext(Context);
  const plantId = useHref().split('/').at(-1);
  const [countProduct, setCountProduct] = useState(1);

  function addCount() {
    setCountProduct(() => countProduct + 1);
  }

  function removeCount() {
    if (countProduct > 1) setCountProduct(() => countProduct - 1);
  }

  useEffect(() => {
    fetchOnePlant(plantId).then((data) => plant.setPlants(data));
  }, []);

  return (
    <>
      <PageName name="Магазин" descr={plant.plants.name} />

      <Container>
        <Link to={SHOP_ROUTE}>
          <button className={cl.show_more}>
            <ChevronLeft />
            Назад ко всем товарам
          </button>
        </Link>
        <section className={cl.main_inf}>
          <div className={cl.images}>
            {plant.plants.img &&
              plant.plants.img.map((item, index) => (
                <img key={index} src={process.env.REACT_APP_API_URL + item} alt="" />
              ))}
          </div>
          <div className={cl.right_row}>
            <div className={cl.up}>
              <h3 className={cl.title}>{plant.plants.name}</h3>
              <p className={cl.price}>{plant.plants.price}</p>
            </div>
            <div className={cl.bottom}>
              <p className={cl.up_str}>Количество</p>
              <div className={cl.buttons}>
                <Button>Добавить в корзину</Button>
                <div className={cl.count}>
                  <button onClick={removeCount}>-</button>
                  {countProduct}
                  <button onClick={addCount}>+</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
});

export default Plant;
