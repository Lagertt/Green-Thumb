import React, { useContext, useState } from 'react';
import cl from './Header.module.scss';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../Container/Container';
import TwoColorTitle from '../../TwoColorTitle/TwoColorTitle';
import MarketingLine from '../../MarketingLine/MarketingLine';
import { getPromotionDays } from '../../../utils/workWithDates';
import { Context } from '../../../index';
import { LOGIN_ROUTE, BASKET_ROUTE } from '../../../utils/consts';
import { logout } from '../../../API/userAPI';
import { Menu, ShoppingCart, LogOut, LogIn, X } from 'lucide-react';

const Header = observer(({ title, items }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [visiblePopup, setVisiblePopup] = useState(false);

  async function logOut() {
    try {
      const data = await logout();
      user.setUser({});
      user.setIsAuth(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

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
            <div className={cl.right_part}>
              {user.isAuth && (
                <Link to={BASKET_ROUTE}>
                  <div className={cl.cart}>
                    <ShoppingCart className={cl.svg} />
                    <span className={cl.count}>4</span>
                  </div>
                </Link>
              )}

              {user.isAuth ? (
                <button onClick={logOut}>
                  <LogOut className={cl.svg} />
                  Выйти
                </button>
              ) : (
                <Link to={LOGIN_ROUTE}>
                  <button>
                    <LogIn className={cl.svg} />
                    Войти
                  </button>
                </Link>
              )}

              {visiblePopup ? (
                <>
                  <X onClick={toggleVisiblePopup} className={cl.burger} />
                  <ul className={`${cl.list} ${!visiblePopup ? cl.hidden : ''}`}>
                    {items.map((item, index) => (
                      <li
                        className={`${cl.item}`}
                        onClick={() => {
                          toggleVisiblePopup();
                          navigate(item.route);
                        }}
                        key={`${item.name}_${index}`}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Menu onClick={toggleVisiblePopup} className={cl.burger} />
              )}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
});

export default Header;
