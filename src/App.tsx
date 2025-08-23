import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
const DefaultLayout = React.lazy(() => import('./Components/DefaultLayout'));

const App = () => {
  
  ModuleRegistry.registerModules([AllCommunityModule])

  return (
    <>
      <Routes>
        <Route path='*' element={<DefaultLayout />} />
      </Routes>
    </>
  )
}

export default App
