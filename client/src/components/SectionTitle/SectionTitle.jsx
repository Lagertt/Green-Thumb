import React from 'react';
import cl from './SectionTitle.module.scss';
import TwoColorTitle from '../../components/TwoColorTitle/TwoColorTitle';
import { SHOP_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';

function SectionTitle({ title, haveButton = false }) {
  return (
    <div className={cl.top}>
      <h2 className={cl.title}>
        <TwoColorTitle title={title}></TwoColorTitle>
      </h2>
      {haveButton ? (
        <Link to={SHOP_ROUTE}>
          <button className={cl.show_more}>
            Посмотреть все
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SectionTitle;
