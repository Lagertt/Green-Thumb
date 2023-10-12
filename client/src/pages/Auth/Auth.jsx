import React, { useContext, useState } from 'react';
import cl from './Auth.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { login, registration } from '../../API/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function sendForm(e) {
    e.preventDefault();
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <Container>
      <div className={cl.container}>
        <h2 className={cl.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <form className={cl.form}>
          <input
            className={cl.input}
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={cl.input}
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <div className={cl.bottom}>
            <Button action={(e) => sendForm(e)}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>

            {isLogin ? (
              <p className={cl.line}>
                Нет аккаунта?{' '}
                <NavLink className={cl.link} to={REGISTRATION_ROUTE}>
                  Зарегистрируйся!
                </NavLink>
              </p>
            ) : (
              <p className={cl.line}>
                Уже есть аккаунт?{' '}
                <NavLink className={cl.link} to={LOGIN_ROUTE}>
                  Войдите!
                </NavLink>
              </p>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
});

export default Auth;
