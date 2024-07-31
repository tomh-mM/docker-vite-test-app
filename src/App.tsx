import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleNavigationChange = (isNavigating: boolean) => {
    setIsLoading(isNavigating);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location, isLoading]);

  return (
      <div className='App'>
        { isLoading && <LoadingSpinner /> }
        {
          !isLoading &&
          <>
            <NavBar onNavigate={ handleNavigationChange } />
            <Routes>
              <Route path='/' element={ <HomePage /> } />
              <Route path='/about' element={ <AboutPage /> } />
              <Route path='/counter' element={ <Counter /> } />
            </Routes>
          </>
        }
      </div>
  );
};

export default App;
