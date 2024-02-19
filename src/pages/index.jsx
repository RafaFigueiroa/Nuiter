import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home';
import NotFound from './NotFound';
import SignUp from './SignUp';

function AppPages(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<NotFound />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </Router>
    );
}

export default AppPages;