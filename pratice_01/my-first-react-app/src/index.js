import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Main } from './page/Main';
import { AreaType } from './page/AreaType';
import { SeasonalMenu } from './page/SeasonalMenu';

// CSS 불러오기
import './css/common.css';

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='areaType' element={<AreaType />} />
          <Route path='seasonalMenu/*' element={<SeasonalMenu />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);