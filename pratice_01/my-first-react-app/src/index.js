import React from 'react';
import ReactDOM from 'react-dom/client';
import {Layout} from './layout/Layout';

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </HashRouter>
  )
}

