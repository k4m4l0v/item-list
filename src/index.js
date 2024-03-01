import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsStore from './store/ProductsStore';

export const Context = createContext();

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Context.Provider 
    value={
      {
        products: new ProductsStore()
      }
    }
  >
    <App />
  </Context.Provider>
);
