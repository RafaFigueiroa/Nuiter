import React from 'react';
import { Link } from "react-router-dom";


import Title from './Title';

function Navbar(){
    return(
        <div className='py-2 px-8 bg-white flex items-center justify-between shadow'>
            <Title />

            <div className='flex items-center gap-2'>
                <p><Link to="/signin" className="text-blue-500 hover:underline">login</Link></p>
                <button className='px-3 py-1 text-slate-100 rounded bg-red-500 hover:bg-red-600 duration-200'>sair</button>
            </div>
        </div>
    );
}

export default Navbar;