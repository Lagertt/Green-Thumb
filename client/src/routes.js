import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  PLANT_ROUTE,
} from './utils/consts';

import {} from './pages/index';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: PLANT_ROUTE + '/:id',
    Component: Plant,
  },
];
