// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.


import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import Index from "../components/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Index />);
});

