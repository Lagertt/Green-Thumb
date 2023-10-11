import React from 'react';
import cl from './Categories.module.scss';
import Container from '../../../components/Container/Container';
import img3 from '../../../assets/img/categories/1.jpg';
import img4 from '../../../assets/img/categories/2.jpg';
import img1 from '../../../assets/img/categories/3.jpg';
import img2 from '../../../assets/img/categories/4.png';
import img6 from '../../../assets/img/categories/5.jpg';
import img5 from '../../../assets/img/categories/6.jpg';
import SectionTitle from '../../SectionTitle/SectionTitle';

function Categories({ items }) {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className={cl.categories}>
      <Container>
        <SectionTitle title="Покупки по категориям" haveButton={false}></SectionTitle>

        <ul className={cl.list}>
          {items.length &&
            items.map((item, index) => (
              <li className={cl.item} key={index}>
                <div className={cl.img}>
                  <img src={images[index]} alt={item.name} />
                </div>
                <h4 className={cl.name}>{item.name}</h4>
              </li>
            ))}
          {/* <li className={cl.item}>
            <div className={cl.img}>
              <img src={img3} alt="кактус" />
            </div>
            <h4 className={cl.name}>Кактусы</h4>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img1} alt="ползучее растение" />
            </div>
            <h4 className={cl.name}>Ползучие растения</h4>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img4} alt="" />
            </div>
            <h4 className={cl.name}>Суккуленты</h4>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img5} alt="" />
            </div>
            <h4 className={cl.name}>Цветущие растения</h4>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img6} alt="" />
            </div>
            <h4 className={cl.name}>Пальмы</h4>
          </li>
          <li className={cl.item}>
            <div className={cl.img}>
              <img src={img2} alt="" />
            </div>
            <h4 className={cl.name}>Бонсай</h4>
          </li> */}
        </ul>
      </Container>
    </section>
  );
}

export default Categories;
