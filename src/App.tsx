import { BrowserRouter } from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer } from "react-toastify";
//
import { GlobalStyle } from "./assets/style/Global";

import Router from "./router/Router";
import LoginContext from "./context/Context";

export function App() {
  return (
    <>
      <ToastContainer>
        <GlobalStyle />
        <BrowserRouter>
          <LoginContext>
            <Router />
          </LoginContext>
        </BrowserRouter>
      </ToastContainer>
    </>
  );
}

// Jasurbekdan Hello ! 22:10

// "proxy": "http://tgf.kahero.uz/admin-api/",
