import React from "react";
import router from "./router/main";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import theme from "./theme/ThemeConfig" ; 
function App() {
  return (
    <ConfigProvider 
    direction="ltr"
    theme={theme}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
