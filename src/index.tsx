import {render} from "react-dom";
import cls from './index.module.scss'
import App from "./App";
import {BrowserRouter} from "react-router-dom";


render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)