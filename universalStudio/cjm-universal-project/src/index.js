import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";

import {Main} from './contents/Main.jsx'
import {Attraction} from './contents/Attraction.jsx'
import {SeasonalMenu} from './contents/SeasonalMenu.jsx'
import {Goods} from './contents/Goods.jsx'
import {CustomerCenter} from './contents/CustomerCenter.jsx'
import { Ticket } from './contents/TIcket.jsx';
import { Detail } from './contents/Detail.jsx';
import { Layout } from './layout/Layout';
import { Member } from './contents/Member.jsx';
import { SchPage } from './contents/SchPage.jsx';

// CSS 불러오기
import './css/common.css';
import { Hotel } from './contents/Hotel.jsx';
import { Login } from './contents/Login.jsx';
import { Seaching2 } from './contents/module/Seaching2.jsx';

export default function App() {

  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  })
  
  return(
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path='seasonalMenu/*' element={<SeasonalMenu />} />
          <Route path='goods/*' element={<Goods />} />
          <Route path='ticket' element={<Ticket />} />
          <Route path='customerCenter' element={<CustomerCenter />} />
          <Route path='hotel' element={<Hotel />} />
          {/* <Route path='area' element={<Seaching2 />} /> */}
          <Route path='schpage' element={<SchPage />} />
          <Route path='detail' element={<Detail />} />
          <Route path='member' element={<Member />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    {/* // </BrowserRouter> */}
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);