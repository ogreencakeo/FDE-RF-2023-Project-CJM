import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './css/common.css';

// 라우터
import {BrowserRouter, Route, Routes} from "react-router-dom"

// 모듈 불러오기
import {Layout} from './contents/layout/Layout';
import {Main} from './contents/pages/Main';
import {History} from './contents/pages/History';
import {Service} from './contents/pages/Service';
import {Career} from './contents/pages/Career';
import {Sustainability} from './contents/pages/Sustainability';
import {Investors} from './contents/pages/Investors';
import {Newsroom} from './contents/pages/Newsroom';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='hisory' element={<History />} />
          <Route path='service' element={<Service />} />
          <Route path='career' element={<Career />} />
          <Route path='sustainability' element={<Sustainability />} />
          <Route path='investors' element={<Investors />} />
          <Route path='newsroom' element={<Newsroom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);