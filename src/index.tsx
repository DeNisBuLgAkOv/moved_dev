import {render} from "react-dom";
import cls from './index.module.scss'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";


render(
  <BrowserRouter>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)