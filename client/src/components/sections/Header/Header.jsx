import React, { useContext } from 'react';
import cl from './Header.module.scss';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import TwoColorTitle from '../../TwoColorTitle/TwoColorTitle';
import MarketingLine from '../../MarketingLine/MarketingLine';
import { getPromotionDays } from '../../../utils/workWithDates';
import { Context } from '../../../index';
import Button from '../../Button/Button';
import { LOGIN_ROUTE, BASKET_ROUTE } from '../../../utils/consts';
import { logout } from '../../../API/userAPI';

const Header = observer(({ title, items }) => {
  const { user } = useContext(Context);

  async function logOut() {
    try {
      let data = await logout();
      user.setUser({});
      user.setIsAuth(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <>
      <MarketingLine
        text={`Бесплатная доставка на все пальмы только ${getPromotionDays(5)}, успевай купить!`}
      ></MarketingLine>
      <header className={cl.header}>
        <Container>
          <div className={cl.header__container}>
            <h2 className={cl.logo}>
              <TwoColorTitle title={title}></TwoColorTitle>
            </h2>
            <nav>
              <ul className={cl.nav}>
                {items.map((item, index) => (
                  <Link to={`/${item.name}`} key={index}>
                    <li key={item.name}>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </nav>
            {user.isAuth ? (
              <div className={cl.right_part}>
                <Link to={BASKET_ROUTE}>
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
                </Link>

                <Button light={true} action={logOut}>
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
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Выйти
                </Button>
              </div>
            ) : (
              <div className={cl.right_part}>
                <Link to={LOGIN_ROUTE}>
                  <Button light={true}>
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
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" x2="3" y1="12" y2="12" />
                    </svg>
                    Войти
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
});

export default Header;
