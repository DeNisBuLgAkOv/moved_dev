import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRoutes{
  MAIN ='main',
  ABOUT ='about'
}

export const RoutePath:Record<AppRoutes, string> ={
  [AppRoutes.ABOUT]:'/about',
  [AppRoutes.MAIN]:'/'
}

export const routeConfig:Record<AppRoutes,RouteProps > ={
  [AppRoutes.MAIN]:{
    element:<MainPage/>,
    path:RoutePath.main
  },
  [AppRoutes.ABOUT]:{
    element:<AboutPage/>,
    path:RoutePath.about
  }
}