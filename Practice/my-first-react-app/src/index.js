import React from 'react';
import ReactDOM from 'react-dom/client';
import {ImageSlider} from './ImageSlider'

export default function App(){
  return(
    <>
      < ImageSlider/>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
