import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { FilterProvider } from './context/FilterContext';
export function App() {
  return <FilterProvider>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </FilterProvider>;
}