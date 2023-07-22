import React from "react";
import ReactDOM from "react-dom/client";
import Waverunner from "./Waverunner";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Waverunner />
  </React.StrictMode>,
);
