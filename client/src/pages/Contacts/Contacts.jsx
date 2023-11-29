import React from 'react';
import PageName from '../../components/sections/PageName/PageName';
import cl from './Contacts.module.scss';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';

function Contacts() {
  function sendForm(e) {
    e.preventDefault();
    console.log('Форма отправлена');
  }

  return (
    <>
      <PageName name="Контакты" descr="Мы всегда на связи"></PageName>
      <Container>
        <div className={cl.descr}>
          <p>
            Для получения дополнительной информации о&nbsp;наших продуктах и&nbsp;услугах,
            пожалуйста, напишите нам по&nbsp;электронной почте. Наши сотрудники всегда готовы помочь
            вам. Не&nbsp;сомневайтесь!
          </p>
        </div>
        <div className={cl.main}>
          <ul className={cl.contacts}>
            <li className={cl.item}>
              <svg
                className={cl.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className={cl.text}>
                <p className={cl.title}>Адрес</p>
                <p className={cl.info}>614526, Пермский край, город Пермь, улица Ленина, 14</p>
              </div>
            </li>
            <li className={cl.item}>
              <svg
                className={cl.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className={cl.text}>
                <p className={cl.title}>Телефон</p>
                <a className={cl.info} href="tel:89225725520">
                  +7 (922) 572-5520
                </a>
                <a className={cl.info} href="tel:89220398166">
                  +7 (922) 572-5520
                </a>
              </div>
            </li>
            <li className={cl.item}>
              <svg
                className={cl.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div className={cl.text}>
                <p className={cl.title}>Email</p>
                <a className={cl.info} href="mailto:green_thumb@gmail.com">
                  green_thumb@gmail.com
                </a>
              </div>
            </li>
            <li className={cl.item}>
              <svg
                className={cl.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 10" />
              </svg>
              <div className={cl.text}>
                <p className={cl.title}>Рабочий график</p>
                <p className={cl.info}>
                  Пн-Пт: 9:00 - 22:00 <br />
                  Сб-Вс: 9:00 - 21:00
                </p>
              </div>
            </li>
          </ul>
          <form className={cl.form}>
            <div className={cl.elem}>
              <label htmlFor="name">Ваше имя</label>
              <input required type="text" name="name" placeholder="Иван" />
            </div>

            <div className={cl.elem}>
              <label htmlFor="email">Ваш email</label>
              <input required type="email" name="email" placeholder="green_thumb@gmail.com" />
            </div>

            <div className={cl.elem}>
              <label htmlFor="theme">Тема сообщения</label>
              <input type="text" name="theme" placeholder="Необязательно" />
            </div>

            <div className={cl.elem}>
              <label htmlFor="message">Сообщение</label>
              <textarea required rows="10" name="message" placeholder="Я бы хотел уточнить ..." />
            </div>

            <Button action={(e) => sendForm(e)}>Отправить</Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Contacts;
