import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);