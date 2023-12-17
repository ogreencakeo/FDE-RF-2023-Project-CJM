import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './css/common.css';

// 라우터
import {BrowserRouter, Route, Routes} from "react-router-dom"

// 모듈 불러오기
import {Layout} from './contents/layout/Layout';
import {Main} from './contents/pages/Main';
import {About} from './contents/pages/About';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);