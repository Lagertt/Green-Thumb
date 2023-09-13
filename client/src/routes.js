import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  PLANT_ROUTE,
} from './utils/consts';

import { Admin, Auth, Basket, Shop, Contacts, Delivery, Home, News, Plant } from './pages/index';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts />,
  },
  {
    path: DELIVERY_ROUTE,
    Component: <Delivery />,
  },
  {
    path: PLANT_ROUTE + '/:id',
    Component: <Plant />,
  },
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: NEWS_ROUTE,
    Component: <News />,
  },
];
