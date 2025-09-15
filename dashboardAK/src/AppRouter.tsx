import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { RecommendedInternships } from './pages/RecommendedInternships';
import { FilterProvider } from './context/FilterContext';
export function AppRouter() {
  return <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recommended-internships" element={<RecommendedInternships />} />
        </Routes>
      </FilterProvider>
    </BrowserRouter>;
}