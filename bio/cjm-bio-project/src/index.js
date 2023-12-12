import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 라우터
import {BrowserRouter, Route, Routes} from "react-router-dom"

// 모듈 불러오기
import { Layout } from '../contents/layout/Layout';
import {Main} from '../contents/pages/Main'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);