import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home';
import NotFound from './NotFound';

function AppPages(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Router>
    );
}

export default AppPages;