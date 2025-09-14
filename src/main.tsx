import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import theme from "./theme/ThemeConfig.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "288100087759-mq7mgoohmirrg0nr446nhrh8itm2iddl.apps.googleusercontent.com" ; 

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </GoogleOAuthProvider>
);
