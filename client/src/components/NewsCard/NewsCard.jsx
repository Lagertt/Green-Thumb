import React, { useState, useEffect } from 'react';
import cl from './NewsCard.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { ChevronRight, Calendar, Tag } from 'lucide-react';
import { fetchOneCategory } from '../../API/newsAPI';

// import img from '../../assets/img/plant.jpg';
// import { PLANT_ROUTE } from '../../utils/consts';

function NewsCard({ news }) {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    fetchOneCategory(news.newsCategoryId).then((data) => setCategoryName(data.name));
  }, []);

  return (
    <article className={cl.card}>
      <div className={cl.image}>
        <img src={process.env.REACT_APP_API_URL + news.img} alt="" />
      </div>

      <ul className={cl.characters}>
        <li className={cl.charact}>
          <Calendar size={15} /> {news.date}
        </li>
        <li className={cl.charact}>
          <Tag size={15} /> {categoryName}
        </li>
      </ul>
      <h4 className={cl.title}>{news.title}</h4>
      <p className={cl.descr}>{news.text.substr(0, 300)}...</p>
      <button className={cl.show_more}>
        Читать далее
        <ChevronRight />
      </button>
    </article>
  );
}

export default NewsCard;
