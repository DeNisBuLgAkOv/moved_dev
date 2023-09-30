import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div className={'loader'}></div>}>
        <Routes>
          {Object.values(routeConfig).map(el => <Route key={el.path} element={el.element} path={el.path}/>)}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;