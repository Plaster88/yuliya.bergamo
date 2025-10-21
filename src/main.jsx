import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import TourDetail from './pages/TourDetail';
import Contacts from './pages/Contacts';
import GlobalStyle from './styles/GlobalStyle';
import { Layout } from './components/layout';

const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tour/:id" element={<TourDetail />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </HashRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
