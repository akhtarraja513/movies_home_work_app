import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Error from './Home/Error';
import Home from './Home/Home';
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;