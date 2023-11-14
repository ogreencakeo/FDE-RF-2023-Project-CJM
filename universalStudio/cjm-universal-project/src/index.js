import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Main} from './contents/Main.jsx'
import {Event} from './contents/Event.jsx'
import {SeasonalMenu} from './contents/SeasonalMenu.jsx'
import {Goods} from './contents/Goods.jsx'
import {CustomerCenter} from './contents/CustomerCenter.jsx'

// CSS 불러오기
import './css/common.css';

import { Layout } from './layout/Layout';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path='event' element={<Event />} />
          <Route path='seasonalMenu' element={<SeasonalMenu />} />
          <Route path='goods' element={<Goods />} />
          <Route path='customerCenter' element={<CustomerCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);