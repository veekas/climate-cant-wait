import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

Honeybadger.configure({
  apiKey: "hbp_K6fksePV9ks43xiGYJDBxP3N46oTzh2Amunp",
  environment: "production",
});

const App = () => (
  <HoneybadgerErrorBoundary honeybadger={Honeybadger}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </HoneybadgerErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("root"));
