import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/Navbar';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
