import React from 'react';
import PageName from '../../components/sections/PageName/PageName';
import Container from '../../components/Container/Container';
import cl from './News.module.scss';
import Filters from '../../components/sections/Filters/Filters';
import delivery from '../../assets/img/news/delivery.jpg';
import winter from '../../assets/img/news/winter.jpg';
import exotic from '../../assets/img/news/exotic.jpg';

import home from '../../assets/img/news/home.jpg';
import office from '../../assets/img/news/office.jpg';
import vertical from '../../assets/img/news/vertical.jpg';
import gift from '../../assets/img/news/gift.jpg';
import photo from '../../assets/img/news/photo.jpg';

function News() {
  return (
    <>
      <PageName name="Блог" descr="Узнайте больше о нашей работе"></PageName>
      <Container className={cl.cont}>
        <ul className={cl.news}>
          <li className={cl.item}>
            <div className={cl.image}>
              <img src={winter} alt="" />
            </div>

            <ul className={cl.characters}>
              <li>Admin</li>
              <li>11.10.2023</li>
              <li>Советы по уходу</li>
            </ul>
            <h4 className={cl.title}>
              Как правильно ухаживать за&nbsp;растениями в&nbsp;зимний период
            </h4>
            <p className={cl.descr}>
              Зима&nbsp;&mdash; это трудный период для растений, особенно для тех, которые
              выращиваются в&nbsp;квартирах. Но&nbsp;не&nbsp;отчаивайтесь, ухаживать
              за&nbsp;растениями в&nbsp;зимний период не&nbsp;так сложно, как кажется. В&nbsp;нашем
              блоге мы&nbsp;подготовили для вас несколько советов, как правильно ухаживать
              за&nbsp;растениями в&nbsp;зимний период. Читайте нашу статью и&nbsp;делайте своих
              зеленых друзей счастливыми!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>

          <li className={cl.item}>
            <div className={cl.image}>
              <img src={exotic} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>2.10.2023</li>
              <li>Новости магазина</li>
            </ul>
            <h4 className={cl.title}>
              Новые поставки экзотических растений в&nbsp;нашем магазине!
            </h4>
            <p className={cl.descr}>
              Уважаемые покупатели! Мы&nbsp;рады сообщить вам о&nbsp;новых поставках экзотических
              растений в&nbsp;нашем магазине. Теперь у&nbsp;нас появились такие виды, как красный
              папоротник, карликовая пальма и&nbsp;многое другое. Посетите наш магазин
              и&nbsp;обновите свой дом новыми зелеными друзьями!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>

          <li className={cl.item}>
            <div className={cl.image}>
              <img src={delivery} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Новости магазина</li>
            </ul>
            <h4 className={cl.title}>Скидки на&nbsp;все растения до&nbsp;конца недели!</h4>
            <p className={cl.descr}>
              Дорогие покупатели! Мы&nbsp;запускаем акцию&nbsp;&mdash; скидки на&nbsp;все растения
              до&nbsp;конца недели! Вы&nbsp;можете приобрести любое растение со&nbsp;скидкой 20%.
              Не&nbsp;упустите свой шанс обновить свой дом зеленью по&nbsp;выгодной цене!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>

          <li className={cl.item}>
            <div className={cl.image}>
              <img src={home} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Интерьер</li>
            </ul>
            <h4 className={cl.title}>Как выбрать идеальное растение для своего дома</h4>
            <p className={cl.descr}>
              Выбор идеального растения для своего дома - это не так просто, как кажется. Но не
              переживайте, в нашем магазине мы поможем вам выбрать идеальное растение, которое
              подойдет именно для вашего интерьера. Посетите наш магазин и получите консультацию от
              наших экспертов-ботаников.
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>
          <li className={cl.item}>
            <div className={cl.image}>
              <img src={office} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Интересное</li>
            </ul>
            <h4 className={cl.title}>
              Растения для офиса - как они помогают повышать производительность
            </h4>
            <p className={cl.descr}>
              помочь повысить производительность сотрудников. В нашем магазине вы найдете специально
              подобранные растения для офиса, которые помогут создать комфортное рабочее место и
              повысить эффективность работы. Закажите растения для вашего офиса прямо сейчас!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>
          <li className={cl.item}>
            <div className={cl.image}>
              <img src={vertical} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Интерьер</li>
            </ul>
            <h4 className={cl.title}>Как создать вертикальный сад в своей квартире</h4>
            <p className={cl.descr}>
              Вертикальный сад - это не только красиво, но и очень практично, особенно для тех, кто
              живет в квартире. В нашем блоге мы подготовили для вас пошаговую инструкцию, как
              создать вертикальный сад в своей квартире. Читайте нашу статью и превратите свой дом в
              зеленый оазис!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>
          <li className={cl.item}>
            <div className={cl.image}>
              <img src={photo} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Досуг</li>
            </ul>
            <h4 className={cl.title}>Как организовать фотосессию с растениями</h4>
            <p className={cl.descr}>
              Растения - это отличный декор для фотосессий, особенно если вы хотите создать
              атмосферу природы в помещении. В нашем магазине мы предлагаем услугу организации
              фотосессий с использованием растений. Закажите услугу прямо сейчас и получите
              незабываемые фотографии!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>
          <li className={cl.item}>
            <div className={cl.image}>
              <img src={gift} alt="" />
            </div>
            <ul className={cl.characters}>
              <li>Admin</li>
              <li>20.09.2023</li>
              <li>Интересное</li>
            </ul>
            <h4 className={cl.title}>Как сделать подарок из растений</h4>
            <p className={cl.descr}>
              Растения - это отличный подарок для любого случая. В нашем магазине мы предлагаем
              широкий выбор растений для подарков, которые удивят и порадуют ваших близких и друзей.
              Но не только выбор растений важен, но и оформление подарка. В нашем блоге мы
              подготовили для вас несколько идей, как сделать подарок из растений красиво и
              оригинально. Читайте нашу статью и делайте своих близких счастливыми!
            </p>
            <button className={cl.show_more}>
              Читать далее
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </li>
        </ul>
        <Filters
          types={[
            { name: 'Советы по уходу' },
            { name: 'Новости магазина' },
            { name: 'Интерьер' },
            { name: 'Досуг' },
            { name: 'Интересное' },
          ]}
        />
      </Container>
    </>
  );
}

export default News;
