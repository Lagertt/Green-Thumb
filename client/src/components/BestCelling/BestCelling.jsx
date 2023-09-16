import React from 'react';
import cl from './BestCelling.module.scss';
import Container from '../../components/Container/Container';
import img1 from '../../assets/img/best_celling/1.png';
import img2 from '../../assets/img/best_celling/2.png';
import img3 from '../../assets/img/best_celling/3.png';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

function BestCelling() {
  return (
    <section className={cl.best_celling}>
      <Container>
        <SectionTitle title="Самые покупаемые" haveButton={true}></SectionTitle>
        <ul className={cl.list}>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img1} alt="" />
              <p className={cl.name}>Комнатные растения</p>
            </div>
            <Button>Купить</Button>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img2} alt="" />
              <p className={cl.name}>Растения для очистки воздуха</p>
            </div>
            <Button>Купить</Button>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img3} alt="" />
              <p className={cl.name}>Цветущие растения</p>
            </div>
            <Button>Купить</Button>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default BestCelling;
