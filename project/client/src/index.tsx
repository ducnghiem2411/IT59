import { AuthProvider } from "contexts/JWTAuthContext";
import "nprogress/nprogress.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "react-image-lightbox/style.css";
import { BrowserRouter } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import "./api";

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
