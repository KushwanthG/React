import React from 'react';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import FoodList from './FoodList';
import MovieList from './movieList'; 
import './Linkedit.css';

const Linkedit = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/foodlist">Foodlist</Link></li>
        <li><Link to="/movielist">Movielist</Link></li>
      </ul>
    </nav>
  );
}

const Connect = () => {
  return (
    <BrowserRouter>
      <Linkedit />
      <Routes>
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Connect;
