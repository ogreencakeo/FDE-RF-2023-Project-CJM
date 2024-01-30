import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './Layout';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import {Board} from './content/Board';

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Board />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}


const root = createRoot(document.querySelector('#root'));
root.render(<App />);
