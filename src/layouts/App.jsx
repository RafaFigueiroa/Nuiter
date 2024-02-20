import React from 'react';

import Navbar from '../components/Navbar';

function App({children}) {
  return (
    <div className='w-screen h-screen bg-gray-100'>
      <Navbar />
      {children}
    </div>
  )
}

export default App;
