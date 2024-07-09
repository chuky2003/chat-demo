import React, { useContext } from 'react';

import { UserContext } from './components/ContextUser';
import { Login } from './components/login';
import { Principal } from './components/principal';
import { app } from './App.css'




function App() {

  const { logged } = useContext(UserContext)


  return (
    <div id='back' className='background gap-2 text-end grid w-full h-full'>
      <div className='flex items-center justify-center border-gray-500'>
        {!logged ? (<Login />) : (<Principal />)}
      </div>

    </div>
  );
}

export default App;









