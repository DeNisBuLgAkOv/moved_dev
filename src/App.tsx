import React, {Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss'
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>
        главная
      </Link>
      <Link to={'/about'}>
        о странице
      </Link>
      <Suspense fallback={<div className={'loader'}></div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;