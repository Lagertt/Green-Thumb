import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './API/userAPI';
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import { SHOP_ROUTE, CONTACTS_ROUTE, NEWS_ROUTE, HOME_ROUTE } from './utils/consts';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Идёт загрузка ...</div>;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        title="Green Thumb"
        items={[
          { name: 'home', title: 'Главная', route: HOME_ROUTE },
          { name: 'shop', title: 'Товары', route: SHOP_ROUTE },
          { name: 'news', title: 'Блог', route: NEWS_ROUTE },
          { name: 'contacts', title: 'Контакты', route: CONTACTS_ROUTE },
        ]}
      />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
