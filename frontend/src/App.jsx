
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import GlobalStyles from './GlobalStyles'
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []); // Runs only once on mount
 

  return (
    <>
    <GlobalStyles />
    {isLoading ? <Preloader /> : (
  <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
    )}
  
    </>
  )
}

export default App
