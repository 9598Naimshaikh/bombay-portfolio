import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Templates from './pages/Templates'
import HomePageContent from './pages/HomePageContent'
import { BrowserRouter } from 'react-router-dom'
import { DataContext } from './context/UserContext'

const App = () => {
  const username = useContext(DataContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/bombay-portfolio/' element={<HomePageContent username={username} />} />
        <Route path='/bombay-portfolio/templates' element={<Templates />} />
      </Routes>

    </>
  );
}

export default App
