import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Popular from './Pages/Popular/Popular';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main'>
        <Container maxWidth="sm">
          <Routes>
            <Route path='/' element={<Popular />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
