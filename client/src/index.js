import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import UserStore from './store/UserStore';
import PlantStore from './store/PlantStore';
import NewsStore from './store/NewsStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Context.Provider
    value={{
      user: new UserStore(),
      plant: new PlantStore(),
      news: new NewsStore(),
    }}
  >
    <App />
  </Context.Provider>
  // </React.StrictMode>
);
