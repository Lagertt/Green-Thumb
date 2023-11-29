import React, { useContext, useEffect } from 'react';
import PageName from '../../components/sections/PageName/PageName';
import Container from '../../components/Container/Container';
import cl from './News.module.scss';
import Filters from '../../components/sections/Filters/Filters';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchCategories, fetchNews } from '../../API/newsAPI';
import NewsCard from '../../components/NewsCard/NewsCard';

const News = observer(() => {
  const { news } = useContext(Context);

  const sortByDate = (news) => {
    return news.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  };

  useEffect(() => {
    fetchCategories().then((data) => news.setCategories(data));
    fetchNews().then((data) => news.setNews(sortByDate(data.rows)));
  }, []);

  return (
    <>
      <PageName name="Блог" descr="Узнайте больше о нашей работе"></PageName>
      <Container className={cl.cont}>
        <ul className={cl.news}>
          {news.news.length &&
            news.news.map((item, index) => (
              <li key={index} className={cl.item}>
                <NewsCard news={item} />
              </li>
            ))}
        </ul>
        <Filters types={news.categories} />
      </Container>
    </>
  );
});

export default News;
