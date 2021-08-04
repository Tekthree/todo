import React from "react";
import ReactDOM from "react-dom";
import SettingsProvider from "./context/Settings.js";
import LoginProvider from "./context/auth.js";

import App from "./app.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <LoginProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </LoginProvider>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
