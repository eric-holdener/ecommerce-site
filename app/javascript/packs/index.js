import React from "react";
import { render } from "react-dom";
import Routes from "./components/routes.js"

document.addEventListener("DOMContentLoaded", () => {
  render(<Routes />, document.body.appendChild(document.createElement("div")));
});
