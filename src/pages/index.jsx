import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home';
import NotFound from './NotFound';
import SignUp from './SignUp';
import SignIn from './SignIn';

function AppPages(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<NotFound />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/signin' element={<SignIn />}/>
            </Routes>
        </Router>
    );
}

export default AppPages;