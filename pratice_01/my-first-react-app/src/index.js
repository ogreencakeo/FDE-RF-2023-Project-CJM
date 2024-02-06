import React from 'react';
import ReactDOM from 'react-dom/client';
import {Layout} from './layout/Layout';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Board } from './page/Board';


export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Board />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)