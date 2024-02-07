import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//                                    Component 1         component 2         component 3
//                                        |                    |                   |
//                                        |                    |                   |
//                                        |                    |                   |
//                                        |                    |                   |
//                                        |____________________|___________________|
//                                                             |
//                                                             |
//                                                           Home
//                                                             |
//                                                             |
//                                                            App
//                                                             |
//                                                             |
//                                                             |
//                                                          Index.js
//                                                             |
//                                                             |
//                                                             |
//                                                             |
//                                                          Index.html
