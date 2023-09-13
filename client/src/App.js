import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './API/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user.setUser(true);
    user.setIsAuth(true);
    // check()
    //   .then((data) => {
    //     user.setUser(true);
    //     user.setIsAuth(true);
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  // if (loading) {
  //   return <Spinner animation={'grow'} />;
  // }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
