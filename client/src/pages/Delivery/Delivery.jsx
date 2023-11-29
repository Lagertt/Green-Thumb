import React from 'react';
import PageName from '../../components/sections/PageName/PageName';
import Container from '../../components/Container/Container';
import cl from './Delivery.module.scss';

function Delivery() {
  return (
    <>
      <PageName name="Доставка" descr="Привезём в любую точку"></PageName>
      <Container>
        <ul className={cl.list}>
          <li className={cl.item}>
            <p className={cl.text}>
              Стоимость доставки&nbsp;&mdash; от&nbsp;450 рублей (зависит от&nbsp;района города).
            </p>
          </li>
          <li className={cl.item}>
            <p className={cl.text}>
              Доставка осуществляется в&nbsp;рабочие дни и&nbsp;часы компании. Заказы доставляются
              в&nbsp;день обращения или в&nbsp;другой день, удобный покупателю. При заказе&nbsp;Вы
              можете выбрать дату и&nbsp;время доставки и&nbsp;согласовать
              её&nbsp;с&nbsp;менеджером.
            </p>
          </li>
          <li className={cl.item}>
            <p className={cl.text}>
              Мы&nbsp;полностью отвечаем за&nbsp;транспортировку заказа и&nbsp;несём ответственность
              за&nbsp;сохранность растений.
            </p>
          </li>
          <li className={cl.item}>
            <p className={cl.text}>
              Доступен самовывоз по&nbsp;адресу Пермский район, д. Ванюки, ул. Зеленая&nbsp;43. Есть
              возможность оформить подарочную упаковку растений.
            </p>
          </li>
        </ul>

        <table className={cl.table}>
          <tr>
            <th>Район</th>
            <th>Стоимость доставки</th>
          </tr>
          <tr>
            <td>Дзержинский</td>
            <td>500 рублей</td>
          </tr>
          <tr>
            <td>Кировский</td>
            <td>450 рублей</td>
          </tr>
          <tr>
            <td>Ленинский</td>
            <td>550 рублей</td>
          </tr>
          <tr>
            <td>Мотовилихинский</td>
            <td>400 рублей</td>
          </tr>
          <tr>
            <td>Орджоникидзевский</td>
            <td>600 рублей</td>
          </tr>
        </table>
      </Container>
    </>
  );
}

export default Delivery;
