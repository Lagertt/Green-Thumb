import React from 'react';
import cl from './Header.module.scss';
import { Link } from 'react-router-dom';
import MarketingLine from '../MarketingLine/MarketingLine';
import { getPromotionDays } from '../../utils/workWithDates';

function Header({ title, items }) {
  const [fWord, sWord] = title.split(' ');
  return (
      <MarketingLine
        text={`Бесплатная доставка на все садовые растения только ${getPromotionDays(5)}`}
      ></MarketingLine>
    <header className={cl.header}>
      <div className={`${cl.header__container} container`}>
        <h2 className={cl.logo}>
          <span>{fWord}</span> {sWord}
        </h2>
        <nav>
          <ul className={cl.nav}>
            {items.map((item) => (
              <Link to={`/${item.name}`}>
                <li key={item.name}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className={cl.right_part}>
          <div className={cl.search}>
            <span>Поиск</span>
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className={cl.cart}>
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
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className={cl.count}>4</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
