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
import {Technology} from './contents/pages/Technology';
import {NewMedicines} from './contents/pages/NewMedicines';
import {Newsroom} from './contents/pages/Newsroom';
import {Login} from './contents/pages/Login';
import {Member} from './contents/pages/Member';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='hisory' element={<History />} />
          <Route path='technology' element={<Technology />} />
          <Route path='newMedicines' element={<NewMedicines />} />
          <Route path='newsroom' element={<Newsroom />} />
          <Route path='login' element={<Login />} />
          <Route path='member' element={<Member />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);