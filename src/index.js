import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './halaman/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Halaman2 from "./halaman/halaman_about";
import Halaman3 from "./halaman/halaman_menu";
import Halaman4 from "./halaman/halaman_products";
import Halaman5 from "./halaman/halaman_owners";
import Halaman6 from "./halaman/halaman_reservasi";
import Halaman7 from "./halaman/pesanan";
import Halaman8 from "./halaman/pesanan2";

const rootElement =  document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} Route/>
      <Route path="home" element={<App />} Route/>
      <Route path="about" element={<Halaman2 />} Route/>
      <Route path="menu" element={<Halaman3 />} Route/>
      <Route path="products" element={<Halaman4 />} Route/>
      <Route path="owners" element={<Halaman5/>} Route/>
      <Route path="reservasi" element={<Halaman6/>} Route/>
      <Route path="pesanan" element={<Halaman7/>} Route/>
      <Route path="pesanan2" element={<Halaman8/>} Route/>
    </Routes>
  </BrowserRouter>,
  rootElement
);