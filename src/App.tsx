import React from 'react';
import { Routes, Route } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./Components/DefaultLayout'));

const App = () => {
  

  return (
    <>
      <Routes>
        <Route path='*' element={<DefaultLayout />} />
      </Routes>
    </>
  )
}

export default App
