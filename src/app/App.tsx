import React, {Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";



const App = () => {

  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}> Toggle</button>
      <Link to={'/'}>
        главная
      </Link>
      <Link to={'/about'}>
        о странице
      </Link>
      <AppRouter/>
    </div>
  );
};

export default App;