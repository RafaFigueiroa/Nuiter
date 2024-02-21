import React from 'react';

import Navbar from '../components/Navbar';

function App({children}) {
  return (
    <div className='w-screen h-screen bg-gray-100'>
      <Navbar />
      <div className='container mx-36 my-10'>
        {children}
      </div>
    </div>
  )
}

export default App;
