import React, {Suspense, useContext, useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";



const App = () => {

const {theme,toggleTheme} =useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> Toggle</button>
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