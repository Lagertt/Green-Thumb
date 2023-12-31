import React from 'react';
import cl from './Footer.module.scss';
import MarketingLine from '../../MarketingLine/MarketingLine';
import Container from '../../Container/Container';
import { Link } from 'react-router-dom';
import { CONTACTS_ROUTE, DELIVERY_ROUTE, NEWS_ROUTE, SHOP_ROUTE } from '../../../utils/consts';

function Footer({ children }) {
  return (
    <>
      <div className={cl.container}>
        <Container>
          <nav className={cl.nav}>
            <ul className={cl.list}>
              <li className={cl.item}>
                <Link to={SHOP_ROUTE}>Товары</Link>
              </li>
              <li className={cl.item}>
                <Link to={CONTACTS_ROUTE}>Контакты</Link>
              </li>
              <li className={cl.item}>
                <Link to={DELIVERY_ROUTE}>Доставка</Link>
              </li>
              <li className={cl.item}>
                <Link to={NEWS_ROUTE}>Наш блог</Link>
              </li>
            </ul>
          </nav>
          <ul className={cl.list}>
            <li className={cl.item}>
              <a href="https://www.youtube.com" target="_blank">
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </li>
            <li className={cl.item}>
              <a href="https://www.twitter.com" target="_blank">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </li>
            <li className={cl.item}>
              <a href="https://www.facebook.com" target="_blank">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className={cl.item}>
              <a href="https://www.instagram.com" target="_blank">
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className={cl.item}>
              <a href="https://ru.linkedin.com/" target="_blank">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
          </ul>
        </Container>
      </div>
      <MarketingLine text="&copy; GreenThumb. все права защищены."></MarketingLine>
    </>
  );
}

export default Footer;
