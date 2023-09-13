import React from 'react';
import Header from '../components/Header/Header';

function Home() {
  return (
    <Header
      title="Green Thumb"
      items={[
        { name: 'home', title: 'Главная' },
        { name: 'shop', title: 'Товары' },
        { name: 'news', title: 'Блог' },
        { name: 'contacts', title: 'Контакты' },
      ]}
    ></Header>
  );
}

export default Home;
