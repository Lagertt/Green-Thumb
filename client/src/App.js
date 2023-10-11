import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './API/userAPI';
import Header from './components/sections/Header/Header';
import Footer from './components/sections/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user.setUser(true);
    user.setIsAuth(true);
    check()
      .then((data) => {
        user.setUser(true);
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
          { name: 'home', title: 'Главная' },
          { name: 'shop', title: 'Товары' },
          { name: 'news', title: 'Блог' },
          { name: 'contacts', title: 'Контакты' },
        ]}
      />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
