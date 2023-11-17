import React from 'react';
import ReactDOM from 'react-dom/client';
import {YourPage} from './YourPage'

export default function App(){
  return(
    <>
      <YourPage />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
